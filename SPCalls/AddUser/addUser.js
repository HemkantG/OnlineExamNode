const { poolPromise } = require('../../database/db')

module.exports =async function (user) {
    const pool = await poolPromise;
    return pool.request()
        .input('UserName', user.UserName)
        .input('Password', user.UserName)
        .input('firstName', user.FirstName)
        .input('middleName', user.MiddleName)
        .input('lastname', user.LastName)
        .input('contactNo', user.ContactNumber)
        .input('Email', user.Email)
        .input('DOB', user.DOB)
        .input('location', null)
        .input('address', user.AddressLine1 + ", " + user.AddressLine2 + ", " + user.City + " " + user.PinCode + " " + user.State)
        .input('ReferredBy', user.RefferedBy)
        .input('Gender', user.Gender)
        .input('MaritalStatus', user.MaritalStatus)
        .input('CollegeName', user.CollegeName)
        .input('ReferredByContact', user.ReferredByContact)
        .execute("dbo.OnlineTest_Login");

}