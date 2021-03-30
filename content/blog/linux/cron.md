---
title: 'Introduction to scheduling jobs in Linux'
date: 2021-3-22 21:05:23
category: 'linux'
draft: false
---

<p style="color: #8a8a8a">Ever felt the requirement to periodically execute jobs on your system,
jobs such as cleanups or state dumps, even monitoring? The cron daemon is a service that runs on all main distributions of Unix and Linux which lets you
run commands periodically or at any given point of time (scheduling). For example: when you postpone system restart for a software update, it queues up a task in cron to be executed at a certain point in time.</p>

## Cron and Crontable
`cron` is the daemon that schedules tasks for you. 

These tasks are stored in a data structure called `crontable`. 
It is where all your jobs are listed and defined. 

These tasks are called `cron jobs`.

## View the list of cron jobs

You can view the list of all cronjobs that are currently scheduled using the command
```
$ crontab -l

```

To view the crontab of a specific user, you can try
```
$ sudo crontab -u ${username} -l
```

> Note that crontab is the shorthand for crontable.

## How to add a crontable entry
A crontab entry is written using the following command
```
$ crontab -e
```
It opens up your favorite text editor where you can add/edit the crontab entries.

## Syntax of a crontable entry

```
* * * * * command to be executed
– – – – –
| | | | |
| | | | +—– day of week (0 – 6) (Sunday=0)
| | | +——- month (1 – 12)
| | +——— day of month (1 – 31)
| +———– hour (0 – 23)
+————- min (0 – 59)
```

Look at the first line where it says "command to be executed", that's it! That's the syntax. You can provide 5 prefixes called "cron schedule expressions" to the command to be executed. These will help determine the point of time your command has to run by `cron`.

```
* * * * * echo "Superb!!!" >> /home/a.txt
```
A "*" simply means "any". The above command means it will be executed every minute of every hour for every day of the month, every month, and every day.

## Advanced syntax

```
0,15 0-5 * * */2 echo "Superb!!!" >> /home/a.txt
```

- *commas* indicate that a command needs to be executed at such and such time.
- *hyphens* indicate a range.
- *slashes* are for periodic execution.

The snippet above means that your command will run every 0th and 15th minute of every hour from midnight(00:00) to 05:00 on every 2nd day of the week.

## Let's schedule a cronjob.

Let's try something else. I'd like to clean my `/tmp` folder every Friday so that it doesn't clog up. Let's do that with cron. The syntax of the above can be as follows
```
0 0 * * 5 sudo rm -rf /tmp
```
The above command means that it will run once on the "zeroth" minute of "zeroth" hour (midnight) on any day of the month of any month but a Friday only.

## Useful references
- hit `man crontab` on your terminal to know more about crontabs.
- <u>[Crontab Guru](https://crontab.guru/)</u> is a website to visualize your cron schedule expressions.
- Don't be afraid to add comments in crontab for what a particular operation is about.
