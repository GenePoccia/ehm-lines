const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = 'token.json';

// Load client secrets from a local file.
fs.readFile('credentials.json', (err, content) => {
  if (err) return console.log('Error loading client secret file:', err);
  // Authorize a client with credentials, then call the Google Sheets API.
  authorize(JSON.parse(content), listMajors);
});

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
  const {client_secret, client_id, redirect_uris} = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
      client_id, client_secret, redirect_uris[0]);

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getNewToken(oAuth2Client, callback);
    oAuth2Client.setCredentials(JSON.parse(token));
    callback(oAuth2Client);
  });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getNewToken(oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error while trying to retrieve access token', err);
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) return console.error(err);
        console.log('Token stored to', TOKEN_PATH);
      });
      callback(oAuth2Client);
    });
  });
}

const ranges = require('./ranges.json')
/**
 * Prints the names and majors of students in a sample spreadsheet:
 * @see https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth client.
 */
function listMajors(auth) {
  const sheets = google.sheets({version: 'v4', auth});
  
  for(let i = 0; i < ranges.length; i ++) {
    sheets.spreadsheets.values.get({
      spreadsheetId: '1FgV0D1ZMsiXqXv-e2wHBXW7LUGnUQGjJzHCJDha0Z2c',
      range: ranges[i],
    }, (err, res) => {
      if (err) return console.log('The API returned an error: ' + err);
      const rows = res.data.values;
      if (rows.length) {
        let LINE_1 = rows[1]
        let LINE_2 = rows[2]
        let LINE_3 = rows[3]
        let LINE_4 = rows[4]
        let PP_1 = rows[6]
        let PP_2 = rows[7]
        let PK_1 = rows[9]
        let PK_2 = rows[10]
        let startingGoalie = rows[12]
        let backupGoalie = rows[13]

        let lines = {
          lineOne : {
            LW: LINE_1[1],
            C: LINE_1[3],
            RW: LINE_1[5],
            LD: LINE_1[7],
            RD: LINE_1[9]
          },
          lineTwo : {
            LW: LINE_2[1],
            C:  LINE_2[3],
            RW:  LINE_2[5],
            LD:  LINE_2[7],
            RD:  LINE_2[9]
          },
          lineThree : {
            LW: LINE_3[1],
            C:  LINE_3[3],
            RW:  LINE_3[5],
            LD:  LINE_3[7],
            RD:  LINE_3[9]
          },
          lineFour : {
            LW: LINE_4[1],
            C:  LINE_4[3],
            RW:  LINE_4[5],
          },
          PP1 : {
            LW: PP_1[1],
            C:  PP_1[3],
            RW:  PP_1[5],
            LD:  PP_1[7],
            RD:  PP_1[9]
          },
          PP2 : {
            LW: PP_2[1],
            C:  PP_2[3],
            RW:  PP_2[5],
            LD:  PP_2[7],
            RD:  PP_2[9]
          },
          PK1 : {
            LW: PK_1[1],
            C:  PK_1[3],
            LD:  PK_1[5],
            RD:  PK_1[7]
          },
          PK2 : {
            LW: PK_2[1],
            C:  PK_2[3],
            LD:  PK_2[5],
            RD:  PK_2[7]
          },
          goalies: {
            starter : startingGoalie[1],
            backup: backupGoalie[1]
          }
        }

        console.log(lines)


        // rows.map((row) => {
        //   //line 1
        //   //logs player name, LW, C, RW, LD, RD
        //   console.log(row[1], row[3], row[5], row[7], row[9])
        //   //logs ID,  LW, C, RW, LD, RD
        //   console.log(row[2], row[4], row[6], row[8], row[10])
        // });
      } else {
        console.log('No data found.');
      }
    });
  }
}
