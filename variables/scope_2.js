
const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);
// it will print 'bar'. No, it won't produce an error becasue both Foo are defined in different scopes
// The FOO on the top is defined globally and its is accessible from anywhere. but the one in the block is
// only accessible from within the block