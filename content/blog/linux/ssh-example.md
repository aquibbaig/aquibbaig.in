---
title: 'Testing SSH utility to the limits'
date: 2021-3-6 21:05:23
category: 'linux'
draft: false
---

<p style="color: #4b5563">In the last blog post, we learnt all about SSH and how to remotely login
into other machines. But how far can we go with this, can we access any machine over the internet with SSH, imagine a situation that you guessed the password of some random guy's machine and could hack into it without his knowledge. Let's figure it out.<p>

## What SSH can do?

SSH allows you to remotely log in and passwordless access into machines you can have access to. It allows you a secured and encrypted method of communication.

## Networking obligations with SSH

SSH always looks to connect on `PORT 22` of the machine, hence if it is closed for some reason due to your firewall, it is recommended to configure your firewall to expose `PORT 22` else you will get an error as follows:

```
port 22: Connection refused
```

## The Experiment

This weekend, I got some time off my schedule and I got my Linux machine and my Mac ready to test stuff out. I configured **openssh-server** on my Mac and tried to connect through my SSH client on Linux.

```
ssh user@hostname
```

> You need to know the IP address of the host you are connecting to. It is pretty easy in a Mac which shows you the exact command to execute when you check the "Remote Login" option in system preferences. In Linux, you can do that using multiple commands. The easiest one being `ifconfig | grep inet`.

I noticed that I could connect to my Mac till it was connecting to the same network, but once I switched networks by connecting my Mac to my hotspot, I could no longer connect to it, even if I entered the correct IP address (IP addresses assigned by the network are bound to change when the underlying network changes). Out of curiosity, I began to explore why this happens.

## Mythbuster

_drum rolls_

- Well, for starters you "cannot" access any machine over the internet, you can only access servers. SSH works as a client-server architecture, you are requesting access as a client and are requesting access to a server. So, the machine on which you're requesting access should have an installation of SSH server and should be configured to allow connections on `PORT 22`. In Linux machines, you do that by installing **openssh-server**.
  For Mac, just go into your **System Preferences, Sharing Tab** and **check Remote Login**.

- You cannot just access any network other than your own due to restrictions applied by routers or private networks in general. To access those networks you need to have some kind of a gateway between your network and the target network. You need to manually configure that somehow.

> If you cannot access any other network than yourself without a gateway, how do we access the Internet then? turns out that there is a gateway, your ISP?

## Can I access the workstation at my home from the office

That's where the part of manual configuration comes in. When you will be executing SSH from the office, you are trying to access your machine's **PORT 22**, but the first thing you hit is not your machine, but your router (Router's **PORT 22**). Routers generally have firewalls pre-installed. So, a part of configuration involves you to implement _[port forwarding](https://en.wikipedia.org/wiki/Port_forwarding)_ which is nothing but mapping your machine's **PORT 22** with the router's **PORT 22** such that any request to the router's **PORT 22** reaches directly to the machine.
