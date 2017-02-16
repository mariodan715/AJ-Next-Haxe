# Aptitude Test

## Test goals (shouldn't require more than an hour):

**!! Click to watch the [video explaining how it should work](docs/intro.mp4) !!**

1. clone this repo from github
   [https://github.com/sbimikesmullin/haxe-aptitude-test1](https://github.com/sbimikesmullin/haxe-aptitude-test1)
2. follow README instructions until project builds locally;
   you should find that it builds to `./build/html5/debug/bin/assets/index.html` and renders a parchment graphic in the browser
3. copy the code from the AS3 hastebin link [https://hastebin.com/foqiteguho.cs](https://hastebin.com/foqiteguho.cs )
4. convert it to a Haxe file under `./src/Achievement.hx`, and see that the project still builds (although no change is expected to the graphic, the graphic should still render in browser)


## Building on Windows

#### Prerequisites

1. Download and install latest [JetBrains IntelliJ IDEA 2016.3+](https://www.jetbrains.com/idea/download/#section=windows) IDE  
  (*just get Community Edition - the only thing we get with Ultimate edition is a built in localhost webserver*)

1. Download and install latest [Haxe 3.4+](https://haxe.org/download/) 

#### Setup IntelliJ Haxe Plugin

1. On the IDEA welcome screen, click `Configure` > `Plugins`.
1. Click the `Browse Repositories...` button.
1. Type `haxe` and highlight the `Haxe Support` plugin.
1. Click `Install` button
1. Restart IntelliJ  IDEA when prompted.

#### Import Project into IntelliJ

1. Clone this repo to somewhere on your local machine.
1. Copy AJ-Next-Haxe.iml.template to AJ-Next-Haxe.iml. IDEA will modify this with absolute paths so we can't share it completely.
1. On the IDEA welcome screen, click `Import Project`.
1. Select the directory where you cloned this repo, and click `Ok`.
1. On the first screen, make sure `Use existing sources` is selected, then click `Next`.
1. On the screen with `Project name` and `Project location` fields, click `Next`.
1. On the screen with `Source files for your project have been found`, make sure only the `src` directory is checked and it is recognized as Haxe, then click `Next`.
1. On the screen with `Please review libraries found`, click `Next`.
1. On the screen with `Please review suggested module structure`, click `Next`.
1. On the popup screen `The module ... AJ-Next-Haxe.iml already exist`, click `Reuse` (NOTE this is not the default!).
1. On the screen with `Please select the Haxe toolkit`, click `Configure`.
1. Choose the `C:\HaxeToolkit\haxe` folder and click `Ok`.  
  (assumes you installed Haxe to default location)
1. Wait until `Haxe 3.4.0 (3.4.0)` SDK appears selected in the list, click `Next`.
1. On the screen with `No frameworks detected`, click `Finish`.

#### Install Dependencies

From here various package-managers (ie. `haxelib`, `npm`) may be used to install remaining modules, 
which we have version-locked dependencies on, but do not want to or cannot commit to our repository. 

```bash
haxelib setup # specify `.haxelib` as path
# restart IntelliJ if it was open before this
haxelib install all
```

Next, some libs have problems we need to fix manually on install. Do these steps:
1. Add future library manual fixes here.

#### When Adding New Haxe Libraries

New libraries that are added need to be listed in three places:
1. project.xml
1. build.hxml
1. restart IDEA and it will modify your .iml file to include the new libraries. 

Also update the install section above if your library requires any manual steps post-install. 

## Building on Linux

#### Install Haxe and Neko

```bash
sudo -i
mkdir -p /opt && cd /opt
wget https://haxe.org/website-content/downloads/3.4.0-rc.2/downloads/haxe-3.4.0-rc.2-linux64.tar.gz
tar zxvf haxe-3.4.0-rc.2-linux64.tar.gz
wget http://nekovm.org/media/neko-2.1.0-linux64.tar.gz
tar zxvf neko-2.1.0-linux64.tar.gz

ln -s /opt/neko-2.1.0-linux64/libneko.so.2 /usr/lib/libneko.so

logout # exit sudo back to normal user

vim ~/.profile
# haxe
export PATH="/opt/haxe-3.4.0-rc2:/opt/neko-2.1.0-linux64:$PATH"
export HAXE_STD_PATH="/opt/haxe-3.4.0-rc2/std"
export HAXE_HOME="/opt/haxe-3.4.0-rc2"
export NEKOPATH="/opt/neko-2.1.0-linux64"
:wq

source ~/.profile # reload terminal
haxelib # confirm working without error
haxe # confirm working without err
```

#### IntelliJ Haxe SDK Configuration

* **Name:** `Haxe 3.4.0-rc2`
* **Haxe toolkit home path:** `/opt/haxe-3.4.0-rc2`
* **Neko executable:** `/opt/neko-2.1.0-linux64`
* **Haxelib executable:** `/opt/haxe-3.4.0-rc1/haxelib`


#### Install Dependencies

```bash
HAXELIB_PATH=.haxelib haxelib install all
```

You may need to tweak library files manually as per windows instructions above. 
