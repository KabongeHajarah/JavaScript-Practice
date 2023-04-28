//Count logged in users, 
//count users having greater than equal to 50 points from the following object.
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
  let loggedUser=0;
  user50points=0;
  
for (const user in users) {
    if (users[user].isLoggedIn) {
      
      loggedUser++;
      
       
        
    }

    if(users[user].points>=50){
user50points++;
    }

}
console.log(user50points);

console.log(loggedUser);

//**** Questions:2, 3 and 4 are based on the following two arrays:myUsers and products ()
const myUsers = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]
//Imagine you are getting the above users collection from a MongoDB database. a.
                  //2
//Create a function called signUp which allows user to add to the collection. 
//If user exists, inform the user that he has already an account.

const signUp = (user) => {
    const existingUser = myUsers.find(u => u.email === user.email);
    if (existingUser) {
      return "User already has an account.";
    } else {
      myUsers.push(user);
      return "User added successfully.";
    }
  };

//b. Create a function called signIn which allows user to sign in to the application
  const signIn = (email, password) => {
    const user = myUsers.find(u => u.email === email);
    if (user) {
      if (user.password === password) {
        user.isLoggedIn = true;
        return "User logged in successfully.";
      } else {
        return "Incorrect password.";
      }
    } else {
      return "User not found.";
    }
  };



                    //3
//The products array has three elements and each of them has six properties. a. 
//Create a function called rateProduct which rates the product b. 
const rateProduct = (productId, userId, rating) => {
    const product = products.find(p => p._id === productId);
    if (product) {
      const existingRating = product.ratings.find(r => r.userId === userId);
      if (existingRating) {
        existingRating.rate = rating;
        return "Rating updated successfully.";
      } else {
        product.ratings.push({ userId, rate: rating });
        return "Rating added successfully.";
      }
    } else {
      return "Product not found.";
    }
  };
//Create a function called averageRating which calculate the average rating of a product
const averageRating = (productId) => {
    const product = products.find(p => p._id === productId);
    if (product) {
      const ratings = product.ratings;
      if (ratings.length > 0) {
        const sum = ratings.reduce((acc, r) => acc + r.rate, 0);
        return sum / ratings.length;
      } else {
        return "No ratings found for the product.";
      }
    } else {
      return "Product not found.";
    }
  };

                    //4
//Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
const likeProduct = (productId, userId) => {
    const product = products.find(p => p._id === productId);
    if (product) {
      const existingLikeIndex = product.likes.findIndex(l => l === userId);
      if (existingLikeIndex !== -1) {
        product.likes.splice(existingLikeIndex, 1);
        return "Product unliked.";
      } else {
        product.likes.push(userId);
        return "Product liked.";
      }
    } else {
      return "Product not found.";
    }
  };

  const newUser = {
    _id: 'ijklmn',
    username: 'John',
    email: 'john@example.com',
    password: 'password123',
    createdAt: '08/01/2020 10:30 AM',
    isLoggedIn: false
  };


  console.log(signUp(newUser));

// Sign in a user
console.log(signIn('alex@alex.com', '123123'));

// Rate a product
console.log(rateProduct('eedfcf', 'ab12ex', 4.5));

// Calculate average rating of a product
console.log(averageRating('eedfcf'));

// Like/Unlike a product
console.log(likeProduct('aegfal', 'ab12ex'));
console.log(likeProduct('aegfal', 'fg12cy'));