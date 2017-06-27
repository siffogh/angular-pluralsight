app.controller('EventsCtrl', function EventsCtrl($scope) {
    $scope.events = [
        {
            name: "ReactJS Meetup",
            votes: 0
        }, {
            name: "AngularJS Meetup",
            votes: 0
        }
    ];

    $scope.makeVote = function(event, type) {
        switch (type) {
            case 'UP_VOTE':
                event.votes++;
                break;
            case 'DOWN_VOTE':
                event.votes--;
                break
        }
    }
});