# Harmonics

A harmonic progression and modulation calculator. 

![demo](https://github.com/jollyjerr/Harmonics/blob/harmonics2.0/github/save.gif)

## Getting Started

To use Harmonics, simply visit the [demo site](https://harmonic-calculator.firebaseapp.com), create an account, and start writing!

*Unfortunately, Harmonics is not mobile compatible at this time.*

If you wish to dive deeper, feel free to fork and clone this repo.
1. Install [ruby](https://www.ruby-lang.org/en/documentation/installation/). 
 - You can check if Ruby is already installed by running `Ruby -v` in your terminal. If it is installed, you will see a version number.
2. Install [nodejs](https://nodejs.org/en/download/).
3. Navigate to the 'HarmonicsBackend' directory on your device, and run these commands:
 - bundle
 - rails db:create
 - rails db:migrate
 - rails db:seed
 - rails s
 4. With the backend up and running, you can navigate to the 'HarmonicsFrontend' directory and run these commands:
 - npm install -g lite-server
 - lite-server
 
 ## Features
 
### Encrypted Authentication with "JWT" tokens

![login](https://github.com/jollyjerr/Harmonics/blob/harmonics2.0/github/login.gif)

User security is a necessary element of any modern web application. Harmonics uses encrypted "JWT" token authentication to ensure privacy and security.

### Real-time audio playback

At any time, a user can hear a high-quality playback of the phrase they are currently working on by clicking the play button or spacebar.

### User accounts can save and reload phrases, and edit recommendation preferences 

![load phrase](https://github.com/jollyjerr/Harmonics/blob/harmonics2.0/github/load.gif)

## Technology Used

#### Backend
Ruby on Rails
#### Frontend
[howler.js](https://howlerjs.com/)

[Semantic UI](https://semantic-ui.com/)

## Demo Video
[Here!](https://www.google.com)

## Contributing
Feel free to open pull requests or report any bugs!

## License
[GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)
