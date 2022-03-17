const populationModel = require("@models/population");
const userModel = require("@models/users");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const middleware = require("@api/middlewares");

class Service {
  async getPopulation(page) {
    const session = await mongoose.startSession();
    session.startTransaction();
    try {
      const Query = [
        {
          $project: {
            country: "$name.official",
            population: 1,
            independent: 1,
            capital: 1,
            region: 1,
            languages: 1,
            flag: 1,
            timezones: 1,
          },
        },
        {
          $skip: (page - 1) * 10,
        },
        {
          $limit: 10,
        },
      ];
      let getResult = await populationModel.aggregate(Query);
      let getDocCount = await populationModel.find().count();
      if(!getResult.length){
        return {
          status: false,
          msg: 'No data found'
        };
    }
      return {
        status: true,
        data: getResult,
        count: getDocCount,
      };
    } catch (error) {
      if (!session.hasEnded) {
        await session.abortTransaction();
        session.endSession();
      }
      throw new Error(error);
    } finally {
      if (!session.hasEnded) {
        await session.commitTransaction();
        session.endSession();
      }
    }
  }

  async Search(key,page) {
    const session = await mongoose.startSession();
    session.startTransaction();
    try {
      const Query = [
        {
          $match: {
            $or: [
              { "name.official": { $regex: key, $options: "i" } },
              { "region": { $regex: key, '$options': 'i' } },
              { "population": parseInt(key) },
              { "capital": { $regex: key, '$options': 'i' } },
            ],
          },
        },
        {
            $project: {
              country: "$name.official",
              population: 1,
              independent: 1,
              capital: 1,
              region: 1,
              languages: 1,
              flag: 1,
              timezones: 1,
            },
          },
          {
            $skip: (page - 1) * 10,
          },
          {
            $limit: 10,
          },
      ];

      const Query_Count = [
        {
          $match: {
            $or: [
              { "name.official": { $regex: key, $options: "i" } },
              { "region": { $regex: key, '$options': 'i' } },
              { "population": parseInt(key) },
              { "capital": { $regex: key, '$options': 'i' } },
            ],
          },
        },
        {
            $count:"count"
        }
      ];



      let record = await populationModel.aggregate(Query);
      let getDocCount = await populationModel.aggregate(Query_Count);
      if(!record.length){
          return {
            status: false,
            msg: 'No data found'
          };
      }
      return {
        status: true,
        data: record,
        count: getDocCount.length ? getDocCount[0].count : 0,
      };
    } catch (error) {
      if (!session.hasEnded) {
        await session.abortTransaction();
        session.endSession();
      }
      throw new Error(error);
    } finally {
      if (!session.hasEnded) {
        await session.commitTransaction();
        session.endSession();
      }
    }
  }

  async login(userData) {
    try {
      let user = await userModel.findOne({ emailId: userData.emailId });
      if (!user) return { status: false, msg: "Invalid email address" };
      const validPassword = await bcrypt.compare(
        userData.password,
        user.password
      );
      if (!validPassword) return { status: false, msg: "Invalid password" };
      const token = await middleware.createToken();
      return { status: true, token: token, user: user };
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = Service;
