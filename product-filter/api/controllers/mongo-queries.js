use("ORUphone");

// COLLSCAN
// db.corrected_data.aggregate([
//   {
//     $match: {
//       "car": { "$in": ["BMW", "Mercedes"] },
//       "income": { "$lt": 5 }
//     }
//   }
// ])

// db.corrected_data.aggregate([
//   {
//     $search: {
//       index: 'queryIndex',
//       compound: {
//         must: [
//           {
//             text: {
//               query: ["BMW", "Mercedes"],
//               path: 'car'
//             }
//           },
//           {
//             range: {
//               path: 'income',
//               lt: 5
//             }
//           }
//         ]
//       }
//     }
//   }
// ])

// console.log(cursor.toArray().length)


// var cursor = db.corrected_data.aggregate([
//   {
//     $search: {
//       index: 'queryIndex',
//       text: {
//         query: 'BMW Mercedes',
//         path: 'car'
//       }
//     }
//   },
//   {
//     $match: {
//       "income": { "$lt": 5 }
//     }
//   }
// ])


// db.corrected_data.aggregate([
//   {
//     $search: {
//       index: 'queryIndex',
//       compound: {
//         must: [
//           {
//             text: {
//               query: 'Male',
//               path: 'gender'
//             }
//           },
//           {
//             range: {
//               path: "phone_price",
//               gt: 10000
//             }
//           }
//         ]
//       }
//     }
//   }
// ])

db.corrected_data.aggregate([
  {
    $search: {
      index: 'queryIndex',
      regex: {
        query: 'M',
        path: 'last_name'
      }
    }
  }
])



// console.log(cursor.toArray().length)