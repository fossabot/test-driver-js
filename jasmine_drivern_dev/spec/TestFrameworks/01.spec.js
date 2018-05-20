var createReservation = require('./01');

describe('createReservation(passenger, flight)', function() {
  it ('assigns the provided passenger to the passengerInfo property', function() {
    var TEST_PASSENGER = {
      firstName: 'Pete',
      lastName: 'Mitchell',
    };

    var TEST_FLIGHT = {
      number: '3443',
      carrier: 'AceAir',
      destination: 'Miramar, CA',
    };

    var reservation = createReservation(TEST_PASSENGER, TEST_FLIGHT);
    expect(reservation.passengerInfo).toBe(TEST_PASSENGER);
  });
})