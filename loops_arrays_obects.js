var sports = ['football', 'tennis', 'rugby'];

// console.log('number of elements:', sports.length);

// console.log('first sport:', sports[0]);
// console.log('second sport:', sports[1]);

sports.push('curling');
sports.push('snooker');
sports.push('darts');
// console.log('sports array:', sports);

var removedSport = sports.pop();
// console.log('removed sport:', removedSport);
// console.log('sports', sports);

sports.unshift('basketball');
// console.log('sports array:', sports);

var removedSport = sports.shift();
// console.log('removed sport:', removedSport);
//
// console.log('array w/ bsaketball removed', sports);

var removedSport = sports.splice(3, 1);
// console.log('removed sport:', removedSport);
// console.log('sports array:', sports);


// for (var sport of sports) {
//   var upperCasedSport =
//   sport.toUpperCase();
//   console.log(upperCasedSport);
// }

// for (var i = 0; i < sports.length; i++){
//   var currentSport = sports[i];
//   var upperCasedSport = currentSport.toUpperCase();
//   console.log(upperCasedSport);
// }
//
// for (initialiseCounter; condition; mutateCounter) {
//   //do something
// }

var movie = {
  title: 'Parasite',
  year: 2019,
  language: 'Korean'
};

// console.log("movie object:", movie);
//
// console.log('movie title:', movie.title);

movie.cast = ['Song Kang-ho', 'Lee Sun-Kyun'];

// console.log('movie', movie);

movie.language ='English';

movie['language'] = 'French';
movie['subtitle'] = 'English';
// console.log('movie:', movie);
var propertyToAccess = 'subtitle-language';

movie[propertyToAccess] = 'German';
// console.log('subtitle-language:', movie[propertyToAccess]);
// console.log('subtitle-language:', );
delete movie.year;
// console.log('movie without year:', movie);

movie.ratings = {
  critic: 94,
  audience: 95
}
 // console.log('movie obj:', movie);
 // console.log('audience rating:', movie.ratings.audience);
 //
 // for (var key in movie) {
 //   console.log(`The ${key} is ${movie[key]}`);
 // }

 // var keys = Object.keys(movie);
 // console.log('keys:', keys);


 var movies = [
   {
     title: 'It\'s a Wonderful Life',
     year: 1946,
     director: 'Frank Capra',
     cast: [
       'James Stewart',
       'Donna Reed'
     ],
     ratings: {
       critic: 94,
       audience: 95
     }
   },
   {
     title: 'Black Panther',
     year: 2018,
     director: 'Ryan Coogler',
     cast: [
       'Chadwick Boseman',
       'Michael B. Jordan'
     ],
     ratings: {
       critic: 97,
       audience: 77
     }
   },
   {
     title: 'Star Wars: The Last Jedi',
     year: 2017,
     director: 'Rian Johnson',
     cast: [
       'Mark Hamill',
       'Carrie Fisher'
     ],
     ratings: {
       critic: 91,
       audience: 48
     }
   },
   {
     title: 'Citizen Kane',
     year: 1941,
     director: 'Orson Welles',
     cast: [
       'Joseph Cotten',
       'Dorothy Comingore'
     ],
     ratings: {
       critic: 100,
       audience: 90
     }
   },
 ];

 // 1. Loop through the array of movies and make each movie's title all capital letters.
// for (var movie of movies) {
//   var title = movie.title;
//   var upTitled = title.toUpperCase();
//   movie.title = upTitled;
// }
// console.log('movies:', movies);


// 2. Loop through the array and find the movie with the title Citizen Kane. log its year of release.
// for (var movie of movies) {
//   if(movie.title === "Citizen Kane") {
//     console.log(`Citizen Kane was released in ${movie.year}`);
//   }
// }
// 3. Using a different kind of loop, iterate through the movies and log each movie's title and audience rating.


for (var i = 0; i < movies.length; i++) {
  console.log(movies[i].title);
  console.log(movies[i].ratings.audience);
}
