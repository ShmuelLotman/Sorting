describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('sorts a single item', function(){
    expect( bubbleSort([1]) ).toEqual( [1] );
  });
it('sorts multiple items', function(){
  expect( bubbleSort([3, 2]) ).toEqual( [2, 3] );
});
it('sorts multiple items', function(){
  expect( bubbleSort([5, 6, 4]) ).toEqual( [4, 5, 6] );
});
it('sorts multiple items', function(){
  expect( bubbleSort([100, 9, 10, 8, 5, 6, 7, 4, 2, 1]) ).toEqual( [1, 2, 4, 5, 6, 7, 8, 9, 10, 100] );
});


});