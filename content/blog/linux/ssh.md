---
title: 'The Ultimate Guide to SSH'
date: 2021-2-21 21:05:23
category: 'linux'
draft: false
---

Almost everyone uses SSH to log into remote machines and I do not see any reason why not. The other way is to use passwords which are not secure cause shorter passwords are easy to be lost or copied while longer ones are hard to
remember. SSH introduces a secured public key authentication mechanism, which
is ideal.

- One, you do not have to remember any keys as the clients do that for you.
- Second SSH keys are properly encrypted so they are hard to imitate, unless you manually give it to them.

> SSH stands for Secure Shell btw.

## SSH public key authentication

On a brief note, this is how a public key authentication works:
- You generate a key pair.
- Keep the private key to yourself, copy the public key over to the server.
- While authenticating, just prove that you contain the private key for the
corresponding public key.

So........

SSH key pairs are two cryptographically secure keys that can be used to authenticate a client to an SSH server. Each key pair consists of a public key and a private key.

The private key is present with the client and should be kept absolutely secret. Any compromise of the private key will allow the attacker to log into servers that are configured with the associated public key without additional authentication. 

Well, there is an option to add a passphrase to the private key. This passphrase acts just like a password for your private key and will be used to decrypt it. Does it mean that you have to enter the passphrase each time you need to authenticate your private key against the server's public key? **Yes** and **No**. We will get to that step in a minute how you can escape such situations, first let's try to see it in action.

## Creating your SSH keys
<iframe
  src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%255Buser%2540host%255D%2524%2520ssh-keygen%2520-f%2520github%250AGenerating%2520public%252Fprivate%2520rsa%2520key%2520pair.%250AEnter%2520passphrase%2520%28empty%2520for%2520no%2520passphrase%29%253A%2520%250AEnter%2520same%2520passphrase%2520again%253A%2520%250AYour%2520identification%2520has%2520been%2520saved%2520in%2520github.%250AYour%2520public%2520key%2520has%2520been%2520saved%2520in%2520github.pub.%250AThe%2520key%2520fingerprint%2520is%253A%250ASHA256%253Ap8C6NKtMGNNq22rMLKNxA8Uvfet8Hks1Qd7cVN%252FBrvA%2520user%2540host%250AThe%2520key%27s%2520randomart%2520image%2520is%253A%250A%252B---%255BRSA%25202048%255D----%252B%250A%257C%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520.%2520%2520%2520oo.%257C%250A%257C%2520.%2520%2520%2520%2520%2520%2520%2520o%2520o%2520o%2520.%252B%257C%250A%257C%2520%2520o%2520%2520%2520%2520%2520%2520%2520o%2520o%2520o%2520o%257C%250A%257C%2520o%2520o%2520.%2520%2520%2520%2520%2520o%2520%2520%2520.%2520%257C%250A%257C%252B%2520o%2520o%2520%252B%2520S%2520%252B%2520o%2520.%2520%2520%257C%250A%257C%2520*%2520.%2520o%2520o%2520%252B%2520.%2520E%2520%2520%2520%257C%250A%257CB.%252B%2520%252B%2520.%2520%252B%2520%2520%2520%2520%2520%2520%2520%2520%257C%250A%257C%252BXoo%2520*%2520..o%2520%2520%2520%2520%2520%2520%2520%257C%250A%257C%253D%252B%252Boo%2520ooo%2520%2520%2520%2520%2520%2520%2520%2520%257C%250A%252B----%255BSHA256%255D-----%252B%250A"
  style="width: 100%; height: 564px; border:0; transform: scale(1); overflow:hidden;"
  sandbox="allow-scripts allow-same-origin">
</iframe>

> Note that if you have any doubts regarding these commands,
you can hit `man <cmd_name>` on your terminal for more details.

- Firstly, it generated a new key pair, one private and one public (marked as .pub) inside your `~/.ssh` directory.

## Copying SSH keys to the server
While copying your SSH keys to the server, you only need to give
the public key. Anyone who has this public key can encrypt data for you
which you can access using your corresponding private key.

<iframe
  src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%255Buser%2540host%2520pwd%255D%2524%2520ssh-copy-id%2520-i%2520%7E%252F.ssh%252F%2524%257Bname_of_the_key%257D%2520user%2540host"
  style="width: 100%; height: 204px; border:0; transform: scale(1); overflow:hidden;"
  sandbox="allow-scripts allow-same-origin">
</iframe>

This command will ask for the password of the user on that host for successful
copy. If the server on which you installed is a Linux machine, it will now save your public key inside `authorized_keys` file.

## Connecting to the server
<iframe
  src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%255Buser%2540host%2520pwd%255D%2524%2520ssh%2520-i%2520%2524%257Bname_of_the_key%257D%2520user%2540host"
  style="width: 100%; height: 204px; border:0; transform: scale(1); overflow:hidden;"
  sandbox="allow-scripts allow-same-origin">
</iframe>

### Host keys
A host key is the server’s public key. The host key is used by the client to decrypt an authentication message sent from the server when connecting. The basic purpose of the host key is to ensure that when you connect to a remote host, it is actually the host that you intended to
connect to.
You can find them in `/etc/ssh/` directory.

## Architecture of SSH

- The client executes the SSH command for the first time and initiates communication with the server.
- The server provides it's public key which is validated against the client's database of host keys as specified above.
- If the host keys do not match, which may happen if you're trying to connect for the first time, there is a alert message shown as follows:
<iframe
  src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=text&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%255Buser%2540host%255D%2524%2520The%2520host%2520key%2520database%2520does%2520not%2520contain%2520an%2520entry%2520for%2520the%2520hostname%250Amyserver%252C%2520which%2520resolved%2520to%2520192.168.0.29%252C%2520port%252022.%250AIt%2520is%2520recommended%2520you%2520verify%2520your%2520host%2520key%2520before%2520accepting.%250AServer%27s%2520host%2520key%2520fingerprint%2520%28MD5%2520hash%29%253A%250A14%253A09%253A26%253Abc%253A13%253A24%253A31%253A5c%253Af7%253A6c%253A39%253A94%253Af7%253A4d%253A52%253A14%250AIf%2520you%2520trust%2520this%2520host%252C%2520enter%2520%25E2%2580%259Cy%25E2%2580%259D%2520to%2520add%2520the%2520key%2520to%2520the%2520host%2520key%2520database%250Aand%2520connect.%2520If%2520you%2520do%2520not%2520trust%2520this%2520host%252C%2520enter%2520%25E2%2580%259Cn%25E2%2580%259D%2520to%2520abandon%2520the%250Aconnection.%250AAccept%2520and%2520save%253F%2520%28y%252Fn%29"
  style="width: 100%; height: 348px; border:0; transform: scale(1); overflow:hidden;"
  sandbox="allow-scripts allow-same-origin">
</iframe>

- After the server is verified, session keys are generated using [Diffie Hellman](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange) algorithm.

- Now comes the part where key exchanges take place. The client begins by sending an ID for the key pair it would like to authenticate with to the server.
The server checks the authorized_keys file of the account that the client is attempting to log into for the key ID.

- If a public key with matching ID is found in the file, the server generates a random number and uses the public key to encrypt the number and sends this encrypted message.

- If the client has the correct private key, it will decrypt the message to obtain the random number that was generated by the server.

- The client combines the obtained random number with the shared session key and calculates the MD5 hash of this value.
The client then sends this MD5 hash back to the server as an answer to the encrypted number message.

- The server uses the same shared session key and the original number that it sent to the client to calculate the MD5 value on its own. It compares its own calculation to the one that the client sent back. If these two values match, it proves that the client was in possession of the private key and the client is authenticated.

Pretty long, I wish I had made a diagram!! 

## SSH agent
SSH agent is used as a store to keep your passphrases in-tact so that you do
not have to enter passphrases each time. To configure, just use the following
command to reference your key and passphrase to ssh-agent.

<iframe
  src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%255Buser%2540host%255D%2524%2520ssh-add%2520%7E%252F.ssh%252F%2524%257Bname_of_the_key%257D"
  style="width: 100%;border:0; transform: scale(1); overflow:hidden;"
  sandbox="allow-scripts allow-same-origin">
</iframe>

## Conclusion
Learning how ssh works can be very vital when you are dealing with vitual machines and remote systems in a microservice architecture. I hope this article was useful.

