// Register `peopleList` component, along with its associated controller and template
angular.
  module('peopleList').
  component('peopleList', {
    // Note: The URL is relative to our `index.html` file
    templateUrl: 'people-list/people-list.template.html',
    controller: function PeopleListController($http) {
      var self = this;
      self.searchName = "";
      self.searchTitle = "";
      self.clearFilters = function(){
        self.searchName = "";
        self.searchTitle = "";
      };
      self.people = [];
      $http.get('people-list/people-list.data.json')
       .success(function(res){
          self.people = res;
        });
      self.regions = [
        { id: 1,name: "Americas" },
        { id: 2, name: "APAC" },
        { id: 3, name: "EMEA" },
        { id: 4, name: "IDC" },
        { id: 5, name: "VDC" }
      ];
      self.companies = [
        { id: 1, name: "GCS Japan"},
        { id: 2, name: "GCS USA"},
        { id: 3, name: "GCS Vietnam"},
        { id: 4, name: "Hitachi Consulting Australia"},
        { id: 5, name: "Hitachi Consulting Belgium"},
        { id: 6, name: "Hitachi Consulting Brazil"},
        { id: 7, name: "Hitachi Consulting Canada Svcs"},
        { id: 8, name: "Hitachi Consulting China - CDC"},
        { id: 9, name: "Hitachi Consulting China - HCCN"},
        { id: 10, name: "Hitachi Consulting Denmark"},
        { id: 11, name: "Hitachi Consulting Finland"},
        { id: 12, name: "Hitachi Consulting France"},
        { id: 13, name: "Hitachi Consulting Germany"},
        { id: 14, name: "Hitachi Consulting Government Solutions"},
        { id: 15, name: "Hitachi Consulting Indonesia"},
        { id: 16, name: "Hitachi Consulting Malaysia"},
        { id: 17, name: "Hitachi Consulting Netherlands"},
        { id: 18, name: "Hitachi Consulting Norway"},
        { id: 19, name: "Hitachi Consulting Portugal"},
        { id: 20, name: "Hitachi Consulting Saudi Arabia"},
        { id: 21, name: "Hitachi Consulting Services Thailand"},
        { id: 22, name: "Hitachi Consulting Singapore"},
        { id: 23, name: "Hitachi Consulting Software Services India Pvt. Ltd"},
        { id: 24, name: "Hitachi Consulting Spain"},
        { id: 25, name: "Hitachi Consulting Sweden"},
        { id: 26, name: "Hitachi Consulting Thailand"},
        { id: 27, name: "Hitachi Consulting UK"},
        { id: 28, name: "Hitachi Consulting US"},
        { id: 29, name: "Stone Apple Malaysia"},
        { id: 30, name: "Stone Apple Solutions Malaysia"},
        { id: 31, name: "Stone Apple Solutions Singapore"}

      ];
      self.currentPage = 1;
      self.totalItems = self.people.length;
    }
  });
