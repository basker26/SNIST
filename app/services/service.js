(function () {
    'use strict';
 
    angular
        .module('app')
        .service('userService', userService);
    
    userService.$inject = ['$http', 'globalConfig'];
    function userService($http, globalConfig) {
        
        var service = {};
        service.additem=additem;
        service.bycategory=bycategory;
        service.viewitem=viewitem;
        service.Login = Login;
        service.Logout=Logout;
        service.GetTaskList=GetTaskList;
        service.ChangePass=ChangePass;
        service.VeryPass=VeryPass;
        service.GetTaskTypeList=GetTaskTypeList;
        service.getusers=getusers;
        service.adduser=adduser;
        service.Changepassword=Changepassword;
        //
        service.additem=additem;
        //
        return service;
        //
        function additem(item){
            return $http.post(globalConfig.additem,item).then(handleSuccess , handleError("Eroor "));
        }

        function Changepassword(item){
            return $http.post(globalConfig.Changepassword,item).then(handleSuccess , handleError("Eroor "));
        }
        
        function adduser(item){
            return $http.post(globalConfig.adduser,item).then(handleSuccess , handleError("Eroor "));
        }
        function getusers(){
            return $http.post(globalConfig.getusersAPI).then(handleSuccess, handleError('Error getting data'));
        
       
        
        
       
        function bycategory() {
            return $http.post(globalConfig.bycategory).then(handleSuccess, handleError('Error getting all user'));

        }
        
        function viewitem(user) {
            return $http.post(globalConfig.viewitemAPI, user).then(handleSuccess, handleError('Error getting all user'));

        }

         function GetTaskTypeList(user) {
            return $http.get(globalConfig.getTaskTypeListApi,{params : user}).then(handleSuccess, handleError('Error getting all user'));

        }
        function Login(user) {
            return $http.post(globalConfig.userLoginApi, user).then(handleSuccess, handleError('Error deleting user'));
        }
        function handleSuccess(res) {
            return res.data;
        }
        function handleError(error) {
            return function () {
                return { success: false, message: error };
            };
        }
        function Logout(user){
           // alert("logout service");
            return $http.get(globalConfig.userLogoutApi,user).then(handleSuccess, handleError('Error destroying session'));
        }
        function GetTaskList(user){
            //alert("alert");
            return $http.get(globalConfig.userDashboardApi, {params : user}).then(handleSuccess,handleError("Error listing tasks")); 
        }
         function ChangePass(user){
            //alert("entered service part");
            return $http.post(globalConfig.userChangePassApi,user).then(handleSuccess,handleError("Error changing password"));
        }
         function VeryPass(user){
            //alert("entered service part");
            return $http.post(globalConfig.userVeryPassApi,user).then(handleSuccess,handleError("Error changing password"));
        }
        
    }
})();
