'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
    module('phoneList').
    directive('phoneList', function () {
        return {
            templateUrl: 'phone-list/phone-list.template.html',
            controller: ['Phone',
                function PhoneListController(Phone) {
                    this.phones = Phone.query();
                    this.orderProp = 'age';
                }
            ],
            controllerAs: '$ctrl',
            bindToController: true
        }
    });
