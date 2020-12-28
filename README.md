# Stickypin
A discord bot that can keep pins at the top of the pin list in a channel. 

![](https://media.discordapp.net/attachments/788539859555450922/792970900445724672/ezgif.com-optimize.gif)

# How to use (Assuming you have nodejs and git installed) : 

## 1. Cloning
```
$ git clone https://github.com/arc25275/stickypin
$ cd stickypin
```

## 2. Install Dependencies

```
$ npm install
```

## 3. Set up config and auth files

##### Rename `_auth.json` to `auth.json` and put your discord token in the space provided
```
{
	"token": "Discord Token"
}
```

##### Rename `_config.json` to `config.json` and put the message ids of the messages you want to keep pinned at the top. You should be able to do as many messages as you want, just make sure to change the number after "id" e.g id1, id2, id3.

Use the full id that is copied when doing this: 

![](https://media.discordapp.net/attachments/788539859555450922/792937961346826271/unknown.png) 

(Found when holding shift on a message) 

Should be in the format of ``channelID-messageID`` Example: 788539859555450922-792909027914022952
```
{
	"messages": {
		"id1": "messageID",
		"id2": "messageID"
	}
}
```

## 4. Running

```
$ node main.js
```




