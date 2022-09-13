const fs = require("fs");
const open = require("open");

function saveAsHtml(memberData) {
  cardCont = "";
  memberData.map((t) => {
    let ef = "";
    if (t.getRole() === "Manager") {
      ef = `<div>Office Number: ${t.getOfficeNumber()}</div>`;
    } else if (t.getRole() === "Engineer") {
      ef = `<div>Github: <a href="https://github.com/${t.getGithub()}" target="_blank">link to github repository</a></div>`;
    } else if (t.getRole() === "Intern") {
      ef = `<div>School: ${t.getSchool()}</div>`;
    }

    cardCont += `<div class="col-md-4">
          <div class="well mini-profile-widget card">
            <div class="details">
              <h3><b>${t.getName()}</b></h3>
              <h4>${t.getRole()}</h4>
              <hr>
              <div>ID: ${t.getId()}</div>
              <div>Email: <a href="mailto:${t.getEmail()}" target="_blank">${t.getEmail()}</a></div>
              ${ef}
            </div>
          </div>
        </div>`;
  });

  const htmlContent =
    `<!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="utf-8">
    <title>Member List</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
    <link href="https://netdna.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://netdna.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
  </head>
  <body>
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">
    <div class="header" id="myHeader">
      <h2>Member List</h2>
    </div>
    <div class="container content">
      <div class="row">` +
    cardCont +
    `</div>
    </div>
  
    <style type="text/css">
      .card {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        background-color: #10312b;
        color: #ffffff;
      }
  
  
      /* Component: Well */
      .well {
        overflow: hidden;
        border-radius: 0;
        margin-bottom: 30px;
      }
  
      .well .well-heading .controls {
        position: absolute;
        top: 10px;
        right: 30px;
      }
  
      .well .well-body {
        margin-top: 20px;
        position: relative;
        z-index: 3;
      }
  
      .well .well-image {
        font-size: 90px;
        line-height: 90px;
        position: absolute;
        top: 20px;
        right: 30px;
        z-index: 1;
        color: rgba(0, 0, 0, 0.15);
        -webkit-transition: all 0.2s ease-in;
        -moz-transition: all 0.2s ease-in;
        -ms-transition: all 0.2s ease-in;
        -o-transition: all 0.2s ease-in;
        transition: all 0.2s ease-in;
      }
  
      .well.well-solid {
        color: white;
      }
  
      .well:hover .well-image {
        font-size: 60px;
      }
  
      .well-white {
        background-color: white;
        color: #454545;
      }
  
      .well-blue {
        background-color: #2980b9;
        color: white;
      }
  
      .well-light-blue {
        background-color: #3498db;
        color: white;
      }
  
      .well-green {
        background-color: #27ae60;
        color: white;
      }
  
      .well-light-green {
        background-color: #2ecc71;
        color: white;
      }
  
      .well-orange {
        background-color: #e82c0c;
        color: white;
      }
  
      .well-light-orange {
        background-color: #ff530d;
        color: white;
      }
  
      .well-red {
        background-color: #d40d12;
        color: white;
      }
  
      .well-light-red {
        background-color: #ff1d23;
        color: white;
      }
  
      .well-purple {
        background-color: #8e44ad;
        color: white;
      }
  
      .well-light-purple {
        background-color: #9b59b6;
        color: white;
      }
  
      .well-pink {
        background-color: #fe31ab;
        color: white;
      }
  
      .well-light-pink {
        background-color: #fd32c0;
        color: white;
      }
  
      .mini-profile-widget .image-container .avatar {
        width: 180px;
        height: 180px;
        display: block;
        margin: 0 auto;
        border-radius: 50%;
        background: white;
        padding: 4px;
        border: 1px solid #dddddd;
      }
  
      .btn-blue {
        background-color: #3498db;
        border-color: #3498db;
        color: white;
      }
  
      .btn-blue:hover,
      .btn-blue:visited {
        background-color: #2980b9;
        color: white;
      }
  
      .btn-green {
        background-color: #2ecc71;
        border-color: #27ae60;
        color: white;
      }
  
      .btn-green:hover,
      .btn-green:visited {
        background-color: #27ae60;
        color: white;
      }
  
      .btn-orange {
        background-color: #ff530d;
        border-color: #e82c0c;
        color: white;
      }
  
      .btn-orange:hover,
      .btn-orange:visited {
        background-color: #e82c0c;
        color: white;
      }
  
      .btn-red {
        background-color: #ff1d23;
        border-color: #d40d12;
        color: white;
      }
  
      .btn-red:hover,
      .btn-red:visited {
        background-color: #d40d12;
        color: white;
      }
  
      .btn-purple {
        background-color: #9b59b6;
        border-color: #8e44ad;
        color: white;
      }
  
      .btn-purple:hover,
      .btn-purple:visited {
        background-color: #8e44ad;
        color: white;
      }
  
      .btn-pink {
        background-color: #fd32c0;
        border-color: #fe31ab;
        color: white;
      }
  
      .btn-pink:hover,
      .btn-pink:visited {
        background-color: #fe31ab;
        color: white;
      }
  
      .mini-profile-widget .details {
        text-align: center;
      }

      /* Style the header */
      .header {
        padding: 10px 16px;
        background: #555;
        color: #f1f1f1;
        text-align: center;
      }

      /* Page content */
      .content {
        padding: 16px;
      }

      /* The sticky class is added to the header with JS when it reaches its scroll position */
      .sticky {
        position: fixed;
        top: 0;
        width: 100%
      }

      s/* Add some top padding to the page content to prevent sudden quick movement (as the header gets a new position at the top of the page (position:fixed and top:0) */
      .sticky + .content {
        padding-top: 102px;
      }
    </style>
  
    <script type="text/javascript">
  
    </script>
  </body>
  
  </html>`;
  fs.writeFile("./dist/index.html", htmlContent, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("The file was saved!");
    open("./dist/index.html");
  });
}

module.exports = { saveAsHtml };