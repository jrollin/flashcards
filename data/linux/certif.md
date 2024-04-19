---
id: linux
title: Linux
description: Linux
topic: javascript
draft: true
tags:
---

# System architecture

## Bios / Uefi

- Basic Input / output System
- Unified Extensible Firmware interface

## Inspect devices

```bash
sudo lspci
```

specify device

```bash
sudo lspci -s 00:03.0 -v
```

Liste usb by tree

```bash
sudo lsusb -t
```

List by module

```bash
sudo lsmod
```

Unload module

```bash
sudo modprob -r modulename
```

Info about module

```bash
sudo modinfo modulename
```

Special directories that exist in RAM
Used by the kernel to store info for running processes

```bash
/proc
/sys
```

## Boot system

Bios / Uefi -> bootloader -> kernel -> init

GRUB : Grant Unified Bootloader

Bios: Shift
UEFI: Esc

## Disk

Show swap usage

```bash
swapon --show
```

show block

```bash
lsblk
```

LVM storage

- physical volume
- volume group
- logical volume

## Libraries

- compiler : source code to machine code store in object files
- linker : combine object files and links them to lib to generate executable file

static linking : merged at link time, no runtime deps
dynmaic linking: not merged at link time, runtime deps

Convention

- library name (lib profix)
- so (shared object)
- version number

ex: libthread.so.0

locations

- /lib
- /lib32
- .... etc...

dynamic library :

- ld.so or ld-linux.so (/etc/ld.so.conf, /etc/ld.so.conf.d)

```bash
sudo ldconfig -p
```

Env path

```bash
LD_LIBRARY_PATH=/usr/local/mylib
```

Dynamic lib dependencies

```bash
ldd /usr/bin/git
```

List unused Dynamic lib dependencies

```bash
ldd -u /usr/bin/git
```

## Debian Packages

.deb file manipulated by dpkg command
apt : advanced package tool

List installed packages

```bash
sudo dpkg --get-selections
```

List dependencies for package

```bash
sudo dpkg -L unrar
```

## GNU / Unix commands

get 1st col of text delimted by space

```bash
cut -d ' ' -f userinfo.txt
```

sorted and unique

```bash
sort countries.txt | uniq
```

regex

```bash
grep 'mail$'  /etc/login.defs
```

Diagnose and manage process

```bash
ps aux
```

## Soft and Hard links

inode: stored data with address ( perms and access time )

finlame.jpg -> inode linked to file

```bash
stat filename.jpg
```

2 files can point to same inode (ex: copy image to 2 user home directories)

```bash
ln /home/a/file.jpg  /home/b/file.jpg
```

Softlink : symbolic link

```bash
ln -s sourcefile softlink
```

# File Hierarchy Standard (FHS)

/bin : binaries for all users
/boot : files needed at boot on RAM and kernel file
/dev : devices
/etc : configuration files
/home: personal files
/lib : shared lib /bin /sbin
/media :
/mnt : tmp mounted filesystem
/opt: installed by user
/root : root unser
/run : pid process files (clear at boot)
/sbin : system binaries
/srv
/tmp : not preserved between programs / cleared
/usr : secndary utilities
/proc : running processes, hardwares
/var :
