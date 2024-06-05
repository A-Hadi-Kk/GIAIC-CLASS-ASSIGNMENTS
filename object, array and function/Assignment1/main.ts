type Friend = {
    id: number;
    firstName: string;
    lastName: string;
};
let people = {
    friends: [] as Friend[]
};
let friend1: Friend = { id: 1, firstName: 'Saim', lastName: 'KK' };
let friend2: Friend = { id: 2, firstName: 'Hadi', lastName: 'KK' };
let friend3: Friend = { id: 3, firstName: 'Asim', lastName: 'Memon' };
people.friends.push(friend1, friend2, friend3);
console.log(people);
