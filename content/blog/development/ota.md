---
title: 'How are "software updates" rolled out?'
date: 2021-02-19 21:05:23
category: 'development'
draft: false
---

Do these mobile companies have some kind of a identification number associated with your device so that they can roll out softwares to their customers? Keeping in mind that each mobile phone company will only send updates to it's own kind, it is a valid assumption to make, however it is invalid as they do
not collect these sensitive data. So, how does it all work? One fine day this question intrigued me and I set out to find everything I can.

## OTA - Over the Air
Turns out software updates are generally governed by a framework called OTA.

> Android devices in the field can receive and install over-the-air (OTA) updates to the system, application software, and time zone rules.  OTA updates are designed to upgrade the underlying operating system, the read-only apps installed on the system partition, and/or time zone rules; these updates do not affect applications installed by the user from Google Play. 

## The Main: Update Engine Daemon
This is where things get interesting. The `update_engine` is a single-threaded daemon process that runs all the times. This process is the heart of the auto updates. It runs with lower priorities in the background and is one of the last processes to start after a system boot. You can think of the `update_engine` running periodically and continously in the background, pinging the update server to check if there is some available update. If there is some, it prompts
the user permissions interactively and on acceptance, installs it.

Updates according to the `update_engine` can be Interactive or Non Interactive or Forced. Non-interactive updates are updates that are scheduled periodically by the update engine and happen in the background. Interactive updates, on the other hand, happen when a user specifically requests an update check (e.g. by clicking on “Check For Update” in Settings). Depending on the update server's policies, interactive updates have higher priority than non-interactive updates (by carrying marker hints). They may decide to not provide an update if they have busy server load, etc. There are other internal differences between these two types of updates too. For example, interactive updates try to install the update faster.

Forced updates are similar to interactive updates (initiated by some kind of user action), but they can also be configured to act as non-interactive. Since non-interactive updates happen periodically, a forced-non-interactive update causes a non-interactive update at the moment of the request, not at a later time.

The updater clients writes its active preferences in `/var/lib/update_engine/` prefs. These preferences help with tracking changes during the lifetime of the updater client and allows properly continuing the update process after failed attempts or crashes.

There are many resiliency features embedded in the update engine that makes auto updates robust including but not limited to:
- If the update engine crashes, it will restart automatically.
- During an active update it periodically checkpoints the state of the update and if it fails to continue the update or crashes in the middle, it will continue from the last checkpoint.
- It retries failed network communication.
- If it fails to apply a delta payload (due to bit changes on the active partition) for a few times, it switches to full payload.


## Architecture of software update
There are two types of system updates:
- A/B system updates (in modern devices)
- Non A/B system updates (in older devices)

## A/B (Seamless) system updates
Your device does not have a recovery partition(which recovers the device back to the previous OS in case of errors during the update). However, for every other partition the device has a copy: A and B. At any instant, only one of A or B paritions is active. The partition which is active will be running the OS. So, when the updates arrive, they get installed on the inactive partition without disturbing the active partition and after they are successful
the device such switches the inactive partition as active. If there was some trouble installing the update, the active partition is untouched anyways.

## Non A/B updates
Your device will have a separate recovery partition containing the software needed to unpack a downloaded update package and apply the update to the other partitions. A/B updates consume some extra space due to redundant partitions
but it's totally worth it.

## Conclusion
So, we have an understanding now of how software updates work, without giving
away sensitive details such as mobile identification numbers or something. (cause there are no references in the source).
