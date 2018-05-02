'use strict'

let request = require('request');
let { google } = require('googleapis');
let drive = google.drive('v2');
let GAPI_KEY = //YOUR API KEY HERE;

exports.handler = (event, context, callback) => {


  let getGdriveData = () => {

    return new Promise(resolve => {
      drive.files.list({
        key : GAPI_KEY,
        q   : "/*YOUR GDRIVE FOLDER HERE*/ in parents",
      }, function (err, res) {

        if (err) {
          return(err)
        } else {
          let filteredResults = res.data.items.map( (el) => {
              let graphicObj = JSON.parse(el.description);
              return {
                        "title": graphicObj.name,
                        "description": graphicObj.description,
                        "id": el.id,
                        "embedLink": el.embedLink,
                        "thumbnailLink": el.thumbnailLink,
                        "createdDate": el.createdDate,
                        "modifiedDate": el.modifiedDate,
                        "tags": graphicObj.tags,
                     }
          });
          resolve(filteredResults);
        }
      //end function body
      });
    //end promise
    })
  //end fcn
  }


  async function compileResults () {
    let dataGD = await getGdriveData();
    return context.succeed({ "dataGD" : dataGD })
  }

  compileResults()

}
