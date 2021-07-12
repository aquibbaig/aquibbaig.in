---
title: 'Everything you should know about SSH'
date: 2021-2-21 21:05:23
category: 'linux'
draft: false
---

<p style="color: #4b5563">Almost everyone uses SSH to log into remote machines and I do not see any reason why not. The other way is to use passwords which are not secure cause shorter passwords are easy to be lost or copied while longer ones are hard to
remember. SSH introduces a secured public key authentication mechanism, which
is ideal.</p>

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

```
[user@host]$ -> ssh-keygen -f github
-> Generating public/private rsa key pair.
-> Enter passphrase (empty for no passphrase):
-> Enter same passphrase again:
-> Your identification has been saved in github.
-> Your public key has been saved in github.pub.
-> The key fingerprint is:
-> SHA256:p8C6NKtMGNNq22rMLKNxA8Uvfet8Hks1Qd7cVN/BrvA user@host
-> The key's randomart image is:
+---[RSA 2048]----+
|          .   oo.|
| .       o o o .+|
|  o       o o o o|
| o o .     o   . |
|+ o o + S + o .  |
| * . o o + . E   |
|B.+ + . +        |
|+Xoo * ..o       |
|=++oo ooo        |
+----[SHA256]-----+
```

> Note that if you have any doubts regarding these commands,
> you can hit `man <cmd_name>` on your terminal for more details.

- Firstly, it generated a new key pair, one private and one public (marked as .pub) inside your `~/.ssh` directory.

## Copying SSH keys to the server

While copying your SSH keys to the server, you only need to give
the public key. Anyone who has this public key can encrypt data for you
which you can access using your corresponding private key. This step is
for password-less access to the machine.

```
[user@host pwd]$ ssh-copy-id -i ~/.ssh/${name_of_the_key} user@host
```

This command will ask for the password of the user on that host for successful
copy. If the server on which you installed is a Linux machine, it will now save your public key inside `authorized_keys` file.

## Connecting to the server

```
[user@host pwd]$ ssh -i ${name_of_the_key} user@host
```

### Host keys

A host key is the server’s public key. The host key is used by the client to decrypt an authentication message sent from the server when connecting. The basic purpose of the host key is to ensure that when you connect to a remote host, it is actually the host that you intended to
connect to.
You can find them in `/etc/ssh/` directory.

## Architecture of SSH

- The client executes the SSH command for the first time and initiates communication with the server.
- The server provides it's public key which is validated against the client's database of host keys as specified above.
- If the host keys do not match, which may happen if you're trying to connect for the first time, there is a alert message shown as follows:

```
[user@host]$ -> The host key database does not contain an
entry for the hostname myserver, which resolved
to 192.168.0.29, port 22.
-> It is recommended you verify your host key before accepting.
-> Server's host key fingerprint (MD5 hash):
14:09:26:bc:13:24:31:5c:f7:6c:39:94:f7:4d:52:14
-> If you trust this host, enter “y” to add the key to the host key database
and connect. If you do not trust this host, enter “n” to abandon the
connection.
-> Accept and save? (y/n)
```

After the server is verified, session keys are generated using [Diffie Hellman](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange) algorithm.

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

```
[user@host]$ ssh-add ~/.ssh/${name_of_the_key}
```

## Conclusion

Learning how ssh works can be very vital when you are dealing with virtual machines and remote systems in a microservice architecture. I hope this article was useful.
