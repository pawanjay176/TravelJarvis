var app = angular.module('myApp', ['ngCookies']);

app.controller('DashboardCtrl', function($scope,$http,$window) {
	
	console.log('Getting content');
	/*$http({
         url: '/getAttractions',
         method: "GET",
         //~ params: {
             //~ dish: $scope.dish,
             //~ local: $scope.locality
             //~ 
         //~ }
     }).success(function (response) {
		 console.log(response);
	 });*/
	 
	 var problem = {
  "Listings": [
    {
      "element": {
        "subject": "Listing",
        "columns": [
          {
            "key": "precipitation",
            "type": "numeric",
            "goal": "min",
            "full_name": "precipitation",
            "is_objective": true
          },
          {
            "key": "crime",
            "type": "numeric",
            "goal": "min",
            "full_name": "crime",
            "is_objective": true
          },
          {
            "key": "safety",
            "type": "numeric",
            "goal": "max",
            "full_name": "safety",
            "is_objective": true
          }
        ],
        "options": [
          {
            "key": "1",
            "name": "High seas scuba diving",
            "place": "Grande Island",
            "values": {
              "precipitation": 80,
              "crime": 80,
              "safety": 40,
              "overall": 60
            },
            "category": "Adventure",
           
            "description_html": "<img style='max-height: 100px; max-width: 100px;'  src=''/> <a title='Photo by Samsung Belgium (Flickr: GALAXY S4 zoom (1)) [CC BY 2.0 (http://creativecommons.org/licenses/by/2.0)], via Wikimedia Commons' href='http://commons.wikimedia.org/wiki/File:Samsung_GALAXY_S4_zoom_(White).jpg' target='_blank'> <img style='max-height: 14px; max-width: 14px;'  src='http://s3-ap-southeast-1.amazonaws.com/media.thrillophilia.com/site/images/photos/000/052/141/medium/3.jpg'/> </a>",
			"image" : "https://static.groupon.co.in/81/01/1334145850181.jpg"
          },
          {
            "key": "2",
            "name": "Scuba diving and snorkelling",
            "place": "Bogmalo Beach",
            "values": {
              "precipitation": 80,
              "crime": 40,
              "safety": 40,
              "overall": 48.0
            },
            "category": "Adventure",
            
            "description_html": "<img style='max-height: 100px; max-width: 100px;'  src=''/><a title='Photo by Karlis Dambrans (Flickr: Samsung Galaxy S4) [CC BY 2.0 (http://creativecommons.org/licenses/by/2.0)], via Wikimedia Commons' href='http://commons.wikimedia.org/wiki/File:Samsung_Galaxy_S4.jpg' target='_blank'> <img style='max-height: 14px; max-width: 14px;'  src='http://s3-ap-southeast-1.amazonaws.com/media.thrillophilia.com/site/images/photos/000/052/141/medium/3.jpg'/> </a>",
			"image" : "http://s3-ap-southeast-1.amazonaws.com/media.thrillophilia.com/site/images/photos/000/052/141/medium/3.jpg"
          },
          {
            "key": "3",
            "name": "Rafting ",
            "place": "Valpori river",
            "values": {
              "precipitation": 90,
              "crime": 70,
              "safety": 50,
              "overall": 64
            },
            "category": "Adventure",
            
            "description_html": "<img style='max-height: 100px; max-width: 100px;'  src=''/><a title='Photo by Karlis Dambrans (Flickr: Samsung Galaxy S4) [CC BY 2.0 (http://creativecommons.org/licenses/by/2.0)], via Wikimedia Commons' href='http://commons.wikimedia.org/wiki/File:Samsung_Galaxy_S4.jpg' target='_blank'> <img style='max-height: 14px; max-width: 14px;'  src='http://s3-ap-southeast-1.amazonaws.com/media.thrillophilia.com/site/images/photos/000/047/860/medium/1.JPG'/> </a>",
			"image" : "http://s3-ap-southeast-1.amazonaws.com/media.thrillophilia.com/site/images/photos/000/047/860/medium/1.JPG"
          },
          {
            "key": "4",
            "name": "JetSki Adventure",
            "place": "Mobor Beach",
            "values": {
              "precipitation": 50,
              "crime": 80,
              "safety": 70,
              "overall": 69
            },
            "category": "Adventure",
            
            "description_html": "<img style='max-height: 100px; max-width: 100px;'  src=''/><a title='Photo by Karlis Dambrans (Flickr: Samsung Galaxy S4) [CC BY 2.0 (http://creativecommons.org/licenses/by/2.0)], via Wikimedia Commons' href='http://commons.wikimedia.org/wiki/File:Samsung_Galaxy_S4.jpg' target='_blank'> <img style='max-height: 14px; max-width: 14px;'  src='http://s3-ap-southeast-1.amazonaws.com/media.thrillophilia.com/site/images/photos/000/045/725/medium/1.jpg'/> </a>",
			"image" : "http://s3-ap-southeast-1.amazonaws.com/media.thrillophilia.com/site/images/photos/000/045/725/medium/1.jpg"
          },
          {
            "key": "5",
            "name": "Swim with Dolphins",
            "place": "Mobor Beach",
            "values": {
              "precipitation": 50,
              "crime": 80,
              "safety": 70,
              "overall":69
            },
            "category": "Outdoor",
            
            "description_html": "<img style='max-height: 100px; max-width: 100px;'  src=''/><a title='Photo by Karlis Dambrans (Flickr: Samsung Galaxy S4) [CC BY 2.0 (http://creativecommons.org/licenses/by/2.0)], via Wikimedia Commons' href='http://commons.wikimedia.org/wiki/File:Samsung_Galaxy_S4.jpg' target='_blank'> <img style='max-height: 14px; max-width: 14px;'  src='http://s3-ap-southeast-1.amazonaws.com/media.thrillophilia.com/site/images/photos/000/047/781/medium/1.jpg'/> </a>",
			"image" : "http://s3-ap-southeast-1.amazonaws.com/media.thrillophilia.com/site/images/photos/000/047/781/medium/1.jpg"
          },
          {
            "key": "6",
            "name": "Biking the islands of Goa",
            "place": "Ribandar Panaji",
            "values": {
              "precipitation": 50,
              "crime": 20,
              "safety": 70,
              "overall" : 51
            },
            "category": "Outdoor",
            
            "description_html": "<img style='max-height: 100px; max-width: 100px;'  src=''/><a title='Photo by Karlis Dambrans (Flickr: Samsung Galaxy S4) [CC BY 2.0 (http://creativecommons.org/licenses/by/2.0)], via Wikimedia Commons' href='http://commons.wikimedia.org/wiki/File:Samsung_Galaxy_S4.jpg' target='_blank'> <img style='max-height: 14px; max-width: 14px;'  src='http://s3-ap-southeast-1.amazonaws.com/media.thrillophilia.com/site/images/photos/000/047/971/medium/1.jpg'/> </a>",
			"image" : "http://s3-ap-southeast-1.amazonaws.com/media.thrillophilia.com/site/images/photos/000/047/971/medium/1.jpg"
          },
          {
            "key": "7",
            "name": "Old Goa churches Tour",
            "place": "Colem village",
            "values": {
              "precipitation": 50,
              "crime": 40,
              "safety": 80,
              "overall": 62
            },
            "category": "Religious",
            
            "description_html": "<img style='max-height: 100px; max-width: 100px;'  src=''/><a title='Photo by Karlis Dambrans (Flickr: Samsung Galaxy S4) [CC BY 2.0 (http://creativecommons.org/licenses/by/2.0)], via Wikimedia Commons' href='http://commons.wikimedia.org/wiki/File:Samsung_Galaxy_S4.jpg' target='_blank'> <img style='max-height: 14px; max-width: 14px;'  src='http://s3-ap-southeast-1.amazonaws.com/media.thrillophilia.com/site/images/photos/000/046/323/medium/thumb.jpg'/> </a>",
			"image" : "http://s3-ap-southeast-1.amazonaws.com/media.thrillophilia.com/site/images/photos/000/051/749/medium/Church_of_St._Francis_Xavier__old_goa.JPG?1447629655"
          }
        ]
      },
      "_id": "56acd8ec9823b2400061c274"
    }
  ]
};
	/*$scope.tester = {
        "subject": "Listing",
        "columns": [
          {
            "key": "weather",
            "type": "numeric",
            "goal": "min",
            "full_name": "weather",
            "is_objective": true
          },
          {
            "key": "crime",
            "type": "numeric",
            "goal": "min",
            "full_name": "crime",
            "is_objective": true
          },
          {
            "key": "safety",
            "type": "numeric",
            "goal": "max",
            "full_name": "safety",
            "is_objective": true
          }
        ],
        "options": [
          {
            "key": "1",
            "name": "High seas scuba diving",
            "place": "Grande Island",
            "values": {
              "weather": 80,
              "crime": 80,
              "safety": 40
            },
            "category": "Adventure",
           
            "description_html": "<img style='max-height: 100px; max-width: 100px;'  src=''/> <a title='Photo by Samsung Belgium (Flickr: GALAXY S4 zoom (1)) [CC BY 2.0 (http://creativecommons.org/licenses/by/2.0)], via Wikimedia Commons' href='http://commons.wikimedia.org/wiki/File:Samsung_GALAXY_S4_zoom_(White).jpg' target='_blank'> <img style='max-height: 14px; max-width: 14px;'  src='http://s3-ap-southeast-1.amazonaws.com/media.thrillophilia.com/site/images/photos/000/052/141/medium/3.jpg'/> </a>",
			"image" : "http://s3-ap-southeast-1.amazonaws.com/media.thrillophilia.com/site/images/photos/000/052/141/medium/3.jpg"
          },
          {
            "key": "2",
            "name": "Scuba diving and snorkelling",
            "place": "Bogmalo Beach",
            "values": {
              "weather": 80,
              "crime": 40,
              "safety": 40
            },
            "category": "Adventure",
            
            "description_html": "<img style='max-height: 100px; max-width: 100px;'  src=''/><a title='Photo by Karlis Dambrans (Flickr: Samsung Galaxy S4) [CC BY 2.0 (http://creativecommons.org/licenses/by/2.0)], via Wikimedia Commons' href='http://commons.wikimedia.org/wiki/File:Samsung_Galaxy_S4.jpg' target='_blank'> <img style='max-height: 14px; max-width: 14px;'  src='http://s3-ap-southeast-1.amazonaws.com/media.thrillophilia.com/site/images/photos/000/052/141/medium/3.jpg'/> </a>",
			"image" : "http://s3-ap-southeast-1.amazonaws.com/media.thrillophilia.com/site/images/photos/000/052/141/medium/3.jpg"
          },
          {
            "key": "3",
            "name": "Rafting at Valpori river",
            "values": {
              "weather": 90,
              "crime": 70,
              "safety": 50
            },
            "category": "Adventure",
            
            "description_html": "<img style='max-height: 100px; max-width: 100px;'  src=''/><a title='Photo by Karlis Dambrans (Flickr: Samsung Galaxy S4) [CC BY 2.0 (http://creativecommons.org/licenses/by/2.0)], via Wikimedia Commons' href='http://commons.wikimedia.org/wiki/File:Samsung_Galaxy_S4.jpg' target='_blank'> <img style='max-height: 14px; max-width: 14px;'  src='http://s3-ap-southeast-1.amazonaws.com/media.thrillophilia.com/site/images/photos/000/047/860/medium/1.JPG'/> </a>",
			"image" : "http://s3-ap-southeast-1.amazonaws.com/media.thrillophilia.com/site/images/photos/000/047/860/medium/1.JPG"
          },
          {
            "key": "4",
            "name": "JetSki Adventure",
            "place": "Mobor Beach",
            "values": {
              "weather": 50,
              "crime": 80,
              "safety": 70
            },
            "category": "Adventure",
            
            "description_html": "<img style='max-height: 100px; max-width: 100px;'  src=''/><a title='Photo by Karlis Dambrans (Flickr: Samsung Galaxy S4) [CC BY 2.0 (http://creativecommons.org/licenses/by/2.0)], via Wikimedia Commons' href='http://commons.wikimedia.org/wiki/File:Samsung_Galaxy_S4.jpg' target='_blank'> <img style='max-height: 14px; max-width: 14px;'  src='http://s3-ap-southeast-1.amazonaws.com/media.thrillophilia.com/site/images/photos/000/045/725/medium/1.jpg'/> </a>",
			"image" : "http://s3-ap-southeast-1.amazonaws.com/media.thrillophilia.com/site/images/photos/000/045/725/medium/1.jpg"
          },
          {
            "key": "5",
            "name": "Swim with Dolphins",
            "place": "Mobor Beach",
            "values": {
              "weather": 50,
              "crime": 80,
              "safety": 70
            },
            "category": "Outdoor",
            
            "description_html": "<img style='max-height: 100px; max-width: 100px;'  src=''/><a title='Photo by Karlis Dambrans (Flickr: Samsung Galaxy S4) [CC BY 2.0 (http://creativecommons.org/licenses/by/2.0)], via Wikimedia Commons' href='http://commons.wikimedia.org/wiki/File:Samsung_Galaxy_S4.jpg' target='_blank'> <img style='max-height: 14px; max-width: 14px;'  src='http://s3-ap-southeast-1.amazonaws.com/media.thrillophilia.com/site/images/photos/000/047/781/medium/1.jpg'/> </a>",
			"image" : "http://s3-ap-southeast-1.amazonaws.com/media.thrillophilia.com/site/images/photos/000/047/781/medium/1.jpg"
          },
          {
            "key": "6",
            "name": "Biking the islands of Goa",
            "place": "Ribandar Panaji",
            "values": {
              "weather": 50,
              "crime": 20,
              "safety": 70
            },
            "category": "Outdoor",
            
            "description_html": "<img style='max-height: 100px; max-width: 100px;'  src=''/><a title='Photo by Karlis Dambrans (Flickr: Samsung Galaxy S4) [CC BY 2.0 (http://creativecommons.org/licenses/by/2.0)], via Wikimedia Commons' href='http://commons.wikimedia.org/wiki/File:Samsung_Galaxy_S4.jpg' target='_blank'> <img style='max-height: 14px; max-width: 14px;'  src='http://s3-ap-southeast-1.amazonaws.com/media.thrillophilia.com/site/images/photos/000/047/971/medium/1.jpg'/> </a>",
			"image" : "http://s3-ap-southeast-1.amazonaws.com/media.thrillophilia.com/site/images/photos/000/047/971/medium/1.jpg"
          },
          {
            "key": "7",
            "name": "Old Goa churches Tour",
            "place": "Colem village",
            "values": {
              "precipitation": 50,
              "crime": 40,
              "safety": 80
            },
            "category": "Religious",
            
            "description_html": "<img style='max-height: 100px; max-width: 100px;'  src=''/><a title='Photo by Karlis Dambrans (Flickr: Samsung Galaxy S4) [CC BY 2.0 (http://creativecommons.org/licenses/by/2.0)], via Wikimedia Commons' href='http://commons.wikimedia.org/wiki/File:Samsung_Galaxy_S4.jpg' target='_blank'> <img style='max-height: 14px; max-width: 14px;'  src='http://s3-ap-southeast-1.amazonaws.com/media.thrillophilia.com/site/images/photos/000/046/323/medium/thumb.jpg'/> </a>",
			"image" : "http://s3-ap-southeast-1.amazonaws.com/media.thrillophilia.com/site/images/photos/000/051/749/medium/Church_of_St._Francis_Xavier__old_goa.JPG?1447629655"
          }
        ]
      };*/
	$scope.listings = problem['Listings'][0]['element']['options'];
	console.log($scope.listings);
	$scope.adventures = [];
	$scope.outdoor = [];
	$scope.religious = [];
	$scope.adventureProblem = {'subject':'Listing','columns': problem['Listings'][0]['element']['columns'],'options':[]};
	$scope.outdoorProblem = {'subject':'Listing','columns': problem['Listings'][0]['element']['columns'],'options':[]};
	$scope.religiousProblem = {'subject':'Listing','columns': problem['Listings'][0]['element']['columns'],'options':[]};
	
	var adventureOptions=[];
	var outdoorOptions=[];
	var religiousOptions=[];
	
	for(var i = 0;i<$scope.listings.length;i++)
	{
		var listing = $scope.listings[i];
		console.log(listing);
		
		if (listing.category == 'Adventure')
		{
			$scope.adventures.push(listing);
			//~ adventureOptions.push(listing);
		}
		else if(listing.category == 'Outdoor')
		{
			$scope.outdoor.push(listing);
			//~ outdoorOptions.push(li
		}
		else
		{
			$scope.religious.push(listing);
		}
	}
	
	console.log($scope.adventures);
	console.log($scope.outdoor);
	console.log($scope.religious);
	
	$scope.adventureProblem['options'] = $scope.adventures;
	$scope.outdoorProblem['options'] = $scope.outdoor;
	$scope.religiousProblem['options'] = $scope.religious;
	console.log($scope.adventureProblem);
	$scope.showTradeOff = function()
	{
		location.href = "dashboard.html#choiceMake";
		console.log($scope.adventureProblem);
		var data = $scope.tester;
		
           $.ajax({
			url: 'http://tradeoffhelper.mybluemix.net/setProblem',
			type: "POST",
			//~ data: JSON.stringify(data),
			data: data,
			contentType: "application/x-www-form-urlencoded",
			//~ complete: callback
		});
		//~ var config = {
            //~ method: 'POST',
            //~ url: 'http://tradeoffhelper.mybluemix.net/setProblem',
            //~ headers: {
              //~ 'Content-Type': 'application/json'
           //~ },
           //~ data: $scope.adventureProblem,
			//~ //data: {'message':{'name':'pawan'}}
       //~ };
       //~ $http(config).success(function(data) {
         //~ $scope.server_resp = data;
         //~ console.log('new window openening');
		//~ console.log(data);
		//~ }).error(function(response) {
		//~ console.log(response);
      //~ });
      var win = window.open("http://tradeoffhelper.mybluemix.net", '_blank');
		win.focus();

	}
});

