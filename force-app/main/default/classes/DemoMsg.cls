public with sharing class DemoMsg {
    @AuraEnabled(cacheable=true)
    public static List<Account> getInputMsg(){  //method
     return[select Id,Name,Phone from Account];
    }

     @AuraEnabled(cacheable=true)
     public static List<Account> getAccounts(String strName){  //method
        String strNameLike='%'+strName+'%';
        return[select Id,Name,Phone from Account  where Name LIKE:strNameLike];
}

}