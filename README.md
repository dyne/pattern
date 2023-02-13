# Pattern

### Imagery generation for hackers

</div>

<p align="center">
  <a href="https://dyne.org">
    <img src="https://files.dyne.org/software_by_dyne.png" width="170">
  </a>
</p>

## Building the digital infrastructure for Fab Cities

<br>
<a href="https://www.interfacerproject.eu/">
  <img alt="Interfacer project" src="https://dyne.org/images/projects/Interfacer_logo_color.png" width="350" />
</a>
<br>


## Pattern Features

![Pattern dyne.org](/public/shot.png?raw=true)

* Imagery filters coherent with the Dyne.org brand identity
* Size created for Facebook/Twitter/Instagram/Youtube format
* Upload from any source (loca/link/drive/facebook/photos ect...)
* Instant download
* Privacy aware (no recorded on any server)

# [LIVE DEMO](https://pattern.dyne.org/)

<br>

<div id="toc">

### 🚩 Table of Contents

- [💾 Install](#-install)
- [🎮 Quick start](#-quick-start)
- [🐋 Docker](#-docker)
- [🐝 API](#-api)
- [🔧 Configuration](#-configuration)
- [📋 Testing](#-testing)
- [🐛 Troubleshooting & debugging](#-troubleshooting--debugging)
- [😍 Acknowledgements](#-acknowledgements)
- [🌐 Links](#-links)
- [👤 Contributing](#-contributing)
- [💼 License](#-license)

</div>

***
## 💾 Install
```pip install / yard add Pattern```

**[🔝 back to top](#toc)**

***
## 🎮 Quick start

To start using Pattern run the following command in the root folder
First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

**[🔝 back to top](#toc)**

***
## 🐋 Docker

Please refer to [DOCKER PACKAGES](../../packages)


**[🔝 back to top](#toc)**

***
## 🐝 API

Available endpoints

### POST /token

Execute a transaction with some amount

**Parameters**

|          Name | Required |  Type   | Description       | 
| -------------:|:--------:|:-------:| ------------------|
|       `token` | required | string  | Type of token. Accepted values `idea` or `strength`  |
|       `amount`| required | number  | Transaction's token amount |
|       `owner` | required | ULID    | The ULID of the Agent's owner |
 
### GET /token/${request.token}/${request.owner}

Retrieves the actual value of the token type for the specified owner

**[🔝 back to top](#toc)**

***
## 🔧 Configuration

**[🔝 back to top](#toc)**

***

## 📋 Testing

**[🔝 back to top](#toc)**

***
## 🐛 Troubleshooting & debugging

**[🔝 back to top](#toc)**

***
## 😍 Acknowledgements

<a href="https://dyne.org">
  <img src="https://files.dyne.org/software_by_dyne.png" width="222">
</a>

Copyleft (ɔ) 2022 by [Dyne.org](https://www.dyne.org) foundation, Amsterdam

Designed, written and maintained by Puria Nafisi Azizi.

Special thanks to Mr. W. White for his special contributions.

**[🔝 back to top](#toc)**

***
## 🌐 Links

https://www.interfacer.eu/

https://dyne.org/

**[🔝 back to top](#toc)**

***
## 👤 Contributing

1.  🔀 [FORK IT](../../fork)
2.  Create your feature branch `git checkout -b feature/branch`
3.  Commit your changes `git commit -am 'Add some fooBar'`
4.  Push to the branch `git push origin feature/branch`
5.  Create a new Pull Request
6.  🙏 Thank you


**[🔝 back to top](#toc)**

***
## 💼 License
    Pattern - Imagery generation for hackers
    Copyleft (ɔ) 2023 Dyne.org foundation

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation, either version 3 of the
    License, or (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.

**[🔝 back to top](#toc)**
