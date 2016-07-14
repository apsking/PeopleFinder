// Register `peopleList` component, along with its associated controller and template
angular.
  module('peopleList').
  component('peopleList', {
    // Note: The URL is relative to our `index.html` file
    templateUrl: 'people-list/people-list.template.html',
    controller: function PeopleListController($http) {
      var self = this;

      self.companies = [];
      self.currentPage = 1;
      self.offices = [];
      self.people = [];
      self.regions = [];
      self.searchName = "";
      self.searchTitle = "";
      self.selectedRegion = undefined;
      self.selectedCompany = undefined;
      self.selectedOffice = undefined;
      self.totalItems = self.people.length;

      //Fetch all data from external data sources
      $http.get('people-list/people-list.data.json')
       .success(function(res){
          self.people = res;
        });
      $http.get('data/regions.json')
       .success(function(res){
          self.regions = res;
        });
      $http.get('data/companies.json')
       .success(function(res){
          self.companies = res;
        });
      $http.get('data/offices.json')
       .success(function(res){
          self.offices = res;
        });

      /* Clear/Reset all page filters*/
      self.clearFilters = function(){
        self.searchName = "";
        self.searchTitle = "";
        self.selectedRegion = undefined;
        self.selectedCompany = undefined;
        self.selectedOffice = undefined;
      };
    }
  });
