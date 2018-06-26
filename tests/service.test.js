describe('myService test', function(){
    describe('when I call myService.one', function(){
        beforeEach(module('serviceApp'));
        it('returns 1', inject(function(myService){ //parameter name = service name

            expect( myService.one ).toEqual(1);

        }))

    })

});