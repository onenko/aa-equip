var app = angular.module('app', ['ngAnimate', 'ngTouch', 'ui.grid']);
 
app.controller('MainCtrl', ['$scope', '$http', 'uiGridConstants', function ($scope, $http, uiGridConstants) {
  $scope.gridOptions1 = {
    enableSorting: true,
    enableColumnMenus: false,

    columnDefs: [
      { field: 'thName', name: "Name", maxWidth: 200 },
      { field: 'thProp', name: "Prop", maxWidth: 50 },
      { field: 'thGrade', name: "Grade", maxWidth: 60 },
      { field: 'thVal1', name: "Val", maxWidth: 30 },
      { field: 'thLink', name: "Link", enableSorting: false }
    ],
    onRegisterApi: function( gridApi ) {
      $scope.grid1Api = gridApi;
    }
  };
 
  $scope.toggleGender = function() {
    if( $scope.gridOptions1.data[64].gender === 'male' ) {
      $scope.gridOptions1.data[64].gender = 'female';
    } else {
      $scope.gridOptions1.data[64].gender = 'male';
    };
    $scope.grid1Api.core.notifyDataChange( uiGridConstants.dataChange.EDIT );
  };
 
  /* provides dynamic growth of the table when new messages added */
  $scope.tableHeight = function() {
      var rowHeight = 30;
      var headerHeight = 60;
      return { height: ($scope.gridOptions1.data.length * rowHeight + headerHeight) + "px" };
  };

  $scope.myData = [
      { thName: 'thName1', thProp: 'thProp1', thGrade: AA_ITEM_BASIC, thVal1: 54, thLink: './th/reports/1455_DATA_LOAD_231054944/1455_DATA_LOAD_231054944-PIN-PRODUCT.PR_XREF.csv.gz' },
      { thName: 'thName2', thProp: 'thProp2', thGrade: AA_ITEM_GREAT, thVal1: 2, thLink: './th/reports/1455_DATA_LOAD_231054944/1456_DATA_LOAD_231054944-PIN-PRODUCT.PR_XREF.csv.gz' }
      { thName: 'thName3', thProp: 'thProp3', thGrade: AA_ITEM_BASIC, thVal2: 54, thVal3: 54, thVal4: 54, thVal5: 54, thVal6: 54, thVal7: 54, thVal8: 54 },
      { thName: 'thName4', thProp: 'thProp4', thGrade: AA_ITEM_BASIC, thVal1: 177, thVal9: 4 }
  ];
 
/* $http.get('/data/101.json')
    .success(function(data) {
      $scope.gridOptions1.data = data;
    }); */

  $scope.gridOptions1.data = $scope.myData;
    
}]);
