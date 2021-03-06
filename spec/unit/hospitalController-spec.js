const pReadingModels = require('../../sequelize')
const hospitalController = require('../../controllers/hospitalController')
const { sequelize } = require('../../sequelize')
const mapper=require('../../mapper/mapper')
describe('Hospital Controller', () => {
    it('getHospitalProfile function', (done) => {
        var spy = spyOn(sequelize, 'query')
        var req = {
            body: {
                name: "test"
            },
            params: {
                hospitalId: 92,
                hospitalBranchRoleId: 162
            },
            query: {
                searchText: "test"
            }
        }

        var res = {
            json: () => { }
        }
        var result = Promise.resolve("test")

        spy.andReturn(Promise.resolve(result))
        hospitalController.getHospitalProfile(req, res, {})
        spy.plan().then((data) => {
            expect(data).toBe("test")
            done()
        })
    });

    // it('getRegisteredRefferal function', (done) => {
    //     var spy = spyOn(sequelize, 'query')
    //     var req = {
    //         body: {
    //             name: "test"
    //         },
    //         params: {
    //             start: 1,
    //             end: 10
    //         },
    //         query: {
    //             searchText: "test"
    //         }
    //     }

    //     var res = {
    //         json: () => { }
    //     }
    //     var result = Promise.resolve("test")
    //     var result2 = Promise.resolve({
    //         for: () => {
    //             return Promise.resolve("test")
    //         }
    //     })

    //    // spy.andReturn(result)
    //     spy.andReturn(result2)

    //     spy.andReturn(Promise.resolve(result))
    //     hospitalController.getRegisteredRefferal(req, res, {})
    //     spy.plan().then((data) => {
    //         expect(data.length).toBe(4)
    //         done()
    //     })
    //     // spy.plan().then((data) => {
    //     //     data.for().then((dt) => {
    //     //         expect(dt).toBe("test")
    //     //     })
    //     //     done()
    //     // })
    // });
    it('getRegisteredRefferal function', (done) => {
        var spy = spyOn(sequelize,'query')
        var req = {
            body: {
                name: "test"
            },
            params:
             {
                start: 1,
                end: 10
              },
            query: {
                searchText: "test"
            }
        }

        var res = {
            json: () => { }
        }
        var result = Promise.resolve("test")

        spy.andReturn(Promise.resolve(result))
        hospitalController.getRegisteredRefferal(req, res, {})
        spy.plan().then((data) => {
            expect(data).toBe("test")
            done()
        })
    });

    it('getRefferalCount function', (done) => {
        var spy = spyOn(sequelize,'query')
        var req = {
            body: {
                name: "test"
            },
            query: {
                searchText: "test"
            }
        }

        var res = {
            json: () => { }
        }
        var result = Promise.resolve("test")

        spy.andReturn(Promise.resolve(result))
        hospitalController.getRefferalCount(req, res, {})
        spy.plan().then((data) => {
            expect(data).toBe("test")
            done()
        })
    });
    it('getStaffAdmin function', (done) => {
        var spy = spyOn(sequelize, 'query')
        var req = {
            body: {
                name: "test"
            },
            params: {
                staffId: 13
            },
            query: {
                searchText: "test"
            }
        }

        var res = {
            json: () => { },
            push: ()=>{ }
        }
        var result = Promise.resolve("test")

        spy.andReturn(Promise.resolve(result))
        hospitalController.getStaffAdmin(req, res, {})
        spy.plan().then((data) => {
            expect(data).toBe("test")
            expect(data.length).toBeGreaterThan(0);
            done()
        })
    });

    it('getRegisterRefferalCount function', (done) => {
        var spy = spyOn(sequelize, 'query')
        var req = {
            body: {
                name: "test"
            },
        }

        var res = {
            json: () => { }
        }
        var result = Promise.resolve("test")

        spy.andReturn(Promise.resolve(result))
        hospitalController.getRegisterRefferalCount(req, res, {})
        spy.plan().then((data) => {
            expect(data).toBe("test")
            done()
        })
    });
    it('getDashBoardDetail function', (done) => {
        var spy = spyOn(sequelize, 'query')
        var spy_one=spyOn(pReadingModels.message_model,'findAll')
        var req = {
            body: {
                name: "test"
            },
            params:{
                hospitalId:12
            },
            query: {
                userType: 'Hospital Branch'
            }
        }
        var req1 = {
            body: {
                name: "test1"
            },
            query: {
                userType: 'Hospital'
            }
        }

        var res = {
            json: () => { }
        }
        var result = Promise.resolve("test")

        spy.andReturn(Promise.resolve(result))
        hospitalController.getDashBoardDetail(req, res, {})
        spy.plan().then((data) => {
            expect(data).toBe("test")
            done();
        })
        var result1 = Promise.resolve("test")

        spy.andReturn(Promise.resolve(result1))
        hospitalController.getDashBoardDetail(req1, res, {})
        spy.plan().then((data) => {
            expect(data).toBe("test")
            done();
        })
        var result = Promise.resolve({
            length: () => {
                return Promise.resolve("test")
            }
        })
        spy_one.andReturn(Promise.resolve(result1))
        hospitalController.getDashBoardDetail(req, res, {})
        spy_one.plan().then((data) => {
            data.length().then((dt) => {
                expect(dt).toBe("test")
                done()
            })
        })
        spy_one.andReturn(Promise.resolve(result1))
        hospitalController.getDashBoardDetail(req, res, {})
        spy_one.plan().then((data) => {
            data.length().then((dt) => {
                expect(dt).toBe("test")
                done()
            })
        })
      
    });
    it('getAllReferralDoctors function', (done) => {
        var spy = spyOn(sequelize, 'query')
        var req = {
            body: {
                name: "test"
            },
            params: {
                staffId: 13
            },
        }

        var res = {
            json: () => { }
        }
        var result = Promise.resolve("test")

        spy.andReturn(Promise.resolve(result))
        hospitalController.getAllReferralDoctors(req, res, {})
        spy.plan().then((data) => {
            expect(data).toBe("test")
            done()
        })
    });
   
    it('updateHospitalProfile function', (done) => {
        var spy = spyOn(sequelize, 'query')
        var req = {
            body: {
                user_name: "test_user",
                email_address:'test@email.com',
            

            },
            params: {
                staffId: 13
            },
        }

        var res = {
            json: () => { 
            }
        }
        var result = Promise.resolve(req)
           hospitalController.updateHospitalProfile(req, res, {})
             done()
    });
    it('updateIsReadFlag function', (done) => {
        var spy = spyOn(pReadingModels.message_model, 'findAll')
        var req = {
            body: {
                name: "test",
                is_read:1
            },
            params: {
                sUserId: 13,
                rUserId:12
            },
        }

        var res = {
            json: () => { }
        }
        var result = Promise.resolve('test')
        spy.andReturn(Promise.resolve(result))
        hospitalController.updateIsReadFlag(req, res, {})
        spy.plan().then((data) => {
            expect(data).toBe("test")
            done()
        })
    });
    it('getReferralAdmin function', (done) => {
        var spy = spyOn(pReadingModels.message_model, 'findAll')
        var req = {
            body: {
                name: "test",
                is_read:1
            },
            params: {
                sUserId: 13,
                rUserId:12,
                referralId:23
            },
        }

        var res = {
            json: () => { },
            length:() =>{
                return 1;
             }
        }
    
        var result = Promise.resolve("test")
        spy.andReturn(Promise.resolve(result))
        hospitalController.getReferralAdmin(req, res, {})
        spy.plan().then((data) => {
            expect(data).toBe("test")
            done()
        })
    });
    it('sendMsgfrmHospToStaff method',(done)=>{
        var spy=spyOn(pReadingModels.message_model,'findAll');
        var req = {
            body: {
                name: "test",
                message:{
                    is_read:0,
                    deleted_flag:0,
                    active_flag:1,
                }
            },
            params: {
                hospitalId: 13,
                hUserId:12,
                sUserId:23
            },
        }

        var res = {
            json: () => { }
        }
        var result = Promise.resolve("test")

        spy.andReturn(Promise.resolve(result))
        hospitalController.sendMsgfrmHospToStaff(req, res, {})
        spy.plan().then((data) => {
            expect(data).toBe("test")
            done()
        })
    });
     it('getMessage method',(done)=>{
        var spy=spyOn(pReadingModels.message_model,'create');
        var req = {
            body: {
                name: "test",
                sender:13
            },
            params: {
                senderId: 13,
                receiverId:12,
                sUserId:23
            },
        }

        var res = {
            json: () => { },
            forEach:() =>{}
        }
        var result = Promise.resolve("test")
        
        spy.andReturn(Promise.resolve(result))
        hospitalController.getMessage(req, res, {})
        spy.plan().then((data) => {
            expect(data).toBe("test")
            done()
        })
    })
    it("hospitalSignUp test", (done) => {
        var spy = spyOn(pReadingModels.user_model, 'findAll')
        var req = {
            body: {
                name: "test"
            },
            params: {
                hospitalId: 92,
                hospitalBranchRoleId: 162
            },
            query: {
                searchText: "test"
            }
        }

        var res = {
            json: () => { }
        }
        var result = Promise.resolve([{
            "test": "test",
            m_hospitals: {
                hospital_name: "test"
            }
        }])

        spy.andReturn(result)
        hospitalController.hospitalSignUp(req, res, {})
        spy.plan().then((data) => {
            expect(data[0].test).toBe("test")
            done()
        })

        var result2 = Promise.resolve({
            "test": "test"
        })

        spy.andReturn(result2)
        hospitalController.hospitalSignUp(req, res, {})
        spy.plan().then((data) => {
            expect(data.test).toBe("test")
            done()
        })

    });
    it("updateHospitalProfile test", (done) => {
        var spy = spyOn(pReadingModels.user_model, 'findAll')
        var spy2 = spyOn(pReadingModels.hospital_model, 'findOne')
        var req = {
            body: {
                name: "test"
            },
            params: {
                hospitalId: 92,
                hospitalBranchRoleId: 162
            },
            query: {
                searchText: "test"
            }
        }

        var res = {
            json: () => { }
        }
        var result = Promise.resolve({
            save: () => {
                return Promise.resolve("test")
            }
        })

        var result2 = Promise.resolve({
            user_id:123,
            save: () => {
                return Promise.resolve("test")
            },
        })

        spy.andReturn(result)
        spy2.andReturn(result2)

        hospitalController.updateHospitalProfile(req, res, {})

        spy.plan().then((data) => {
            data.save().then((dt) => {
                expect(dt).toBe("test")
            })
            done()
        })
        spy2.plan().then((data)=>{
            expect(data.user_id).toBe(123)
            done()
        })

    });
    // it('addRole function', (done) => {
    //     var spy = spyOn(sequelize, 'query');
    //     var req = {
    //         body: {
    //             name: "test"
    //         },
    //     }

    //     var res = {
    //         json: () => { }
    //     }
    //     var result = Promise.resolve("test")

    //     spy.andReturn(Promise.resolve(result))
    //     hospitalController.addRole(req, res, {})
    //     spy.plan().then((data) => {
    //         expect(data).toBe("test")
    //         done()
    //     })
    // });


   

   
   
  
   
})

