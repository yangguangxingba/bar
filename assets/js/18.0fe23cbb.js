(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{441:function(v,_,i){"use strict";i.r(_);var l=i(65),t=Object(l.a)({},(function(){var v=this,_=v.$createElement,i=v._self._c||_;return i("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[i("h1",{attrs:{id:"前端必会的linux知识"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#前端必会的linux知识"}},[v._v("#")]),v._v(" 前端必会的Linux知识")]),v._v(" "),i("h4",{attrs:{id:"概要"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#概要"}},[v._v("#")]),v._v(" 概要")]),v._v(" "),i("h6",[v._v(" 1. 认识Linux ")]),v._v(" "),i("h6",[v._v(" 2. 安装Linux环境 ")]),v._v(" "),i("h6",[v._v(" 3. 认识Linux环境 ")]),v._v(" "),i("h6",[v._v(" 4. 前端开发必须要懂的知识 ")]),v._v(" "),i("h6",[v._v(" 5. 安装linux开发环境 ")]),v._v(" "),i("h6",[v._v(" 6. 关于某些网站无法访问的解决方法 ")]),v._v(" "),i("hr"),v._v(" "),i("br"),v._v(" "),i("h2",{attrs:{id:"_1-认识linux"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_1-认识linux"}},[v._v("#")]),v._v(" 1. 认识Linux")]),v._v(" "),i("h4",{attrs:{id:"linux是什么"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#linux是什么"}},[v._v("#")]),v._v(" linux是什么")]),v._v(" "),i("ul",[i("li",[v._v("linux是一个操作系统，它不是一个成型的东西，它的本质是内核"),i("a",{attrs:{href:"https://www.kernel.org/",target:"_blank",rel:"noopener noreferrer"}},[v._v("“kernel”"),i("OutboundLink")],1),v._v("。\n"),i("ul",[i("li",[v._v("kernel主要是用c写的，里面有各种算法和处理流程。")]),v._v(" "),i("li",[v._v("内核对性能要求非常高，因为底层的东西需要向上提供各种api，或许一个api每秒钟会执行成千上万次，操作非常频繁，需要很高的效率。")])])]),v._v(" "),i("li",[v._v("我们平时所说的Ubuntu、CentOS那些是指"),i("font",{attrs:{color:"red"}},[v._v("发行版")]),v._v("，linux内核只是拥有最基本的功能，它本身有"),i("font",{attrs:{color:"red"}},[v._v("六大系统")]),v._v("，这六大系统就组成了操作系统核心的功能。")],1),v._v(" "),i("li",[v._v("但是那些发行版，除了这六大系统所拥有的功能以外，还加上了很多外壳性的东西，还有各种软件，各种服务等等，这样才构成了完整的linux。")])]),v._v(" "),i("h4",{attrs:{id:"unix、linux与windows的区别"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#unix、linux与windows的区别"}},[v._v("#")]),v._v(" UNIX、linux与windows的区别")]),v._v(" "),i("ul",[i("li",[v._v("UNIX操作系统是一个相当古老的系统，它奠定了现代操作系统的基础，它同时也制定了很多业界的规范。\n"),i("ul",[i("li",[v._v("mac是unix内核，是BSD内核，linux是另外一种内核，BSD内核是有版权的。")]),v._v(" "),i("li",[v._v("unix它的lience(许可证)和linux定义的是不一样的，开源软件的lience各有特点，纯粹的unix的版权是归属于贝尔实验室的，贝尔实验室是AT&T旗下的（美国的一个大通讯公司）。")])])]),v._v(" "),i("li",[v._v("windows一般是用在客户端的桌面上，但是也偶尔被用做服务器，用做服务器的windows也是有图形界面的，但其实有图形界面的服务器是对系统资源的浪费。")]),v._v(" "),i("li",[v._v("linux一般是用在服务器上，基本不使用图形界面，因为服务器它对性能要求很高。linux的内核是从unix上继承下来的，它主张以简为美。windows则比较复杂。")])]),v._v(" "),i("h4",{attrs:{id:"常用的linux发行版"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#常用的linux发行版"}},[v._v("#")]),v._v(" 常用的linux发行版")]),v._v(" "),i("ul",[i("li",[v._v("常用：Ubuntu(一年发行2次[4、10]lts)、CentOS(红帽的社区维护版)、Fedora")]),v._v(" "),i("li",[v._v("欧美常用：Deblan")]),v._v(" "),i("li",[v._v("为安全方面开发的：Kali(有很多网络安全工具和黑客工具)")]),v._v(" "),i("li",[v._v("服务器市场占有比例较大：CentOS、Red Hat(红帽[商业])")]),v._v(" "),i("li",[v._v("桌面系统市场占有比例较大：Ubuntu、Deblan、Fedora")])]),v._v(" "),i("hr"),v._v(" "),i("br"),v._v(" "),i("h2",{attrs:{id:"_2-安装linux环境"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装linux环境"}},[v._v("#")]),v._v(" 2. 安装Linux环境")]),v._v(" "),i("blockquote",[i("h4",{attrs:{id:"注意事项"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[v._v("#")]),v._v(" 注意事项")]),v._v(" "),i("ol",[i("li",[v._v("推荐安装"),i("a",{attrs:{href:"https://www.centos.org/",target:"_blank",rel:"noopener noreferrer"}},[v._v("CentOS"),i("OutboundLink")],1),v._v("，有DVD和Minimal(迷你版)，推荐安装迷你版。")]),v._v(" "),i("li",[v._v("安装CentOS需要依赖虚拟机，推荐使用"),i("a",{attrs:{href:"https://www.vmware.com/cn.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("VMware"),i("OutboundLink")],1),v._v("，在下载下面选择“Workstation Pro”，然后找一个注册码注册就可以了，但是注意不要升级，否则会失效。")]),v._v(" "),i("li",[v._v("虚拟机环境："),i("br"),v._v(" "),i("em",[v._v("a. 内存：\n如果带图形界面，推荐内存至少2g，如果是迷你版的CentOS，因为他只有500M，推荐内存至少1g。")]),v._v(" "),i("br"),v._v(" "),i("em",[v._v("b. 网络适配器：\n配置网络的时候不要使用NAT，否则网络环境就会非常复杂了，它会给你自动配置一个虚拟的局域网来，处理事情的时候会产生一些干扰。推荐使用"),i("font",{attrs:{color:"red"}},[v._v("桥接模式")]),v._v("。但使用桥接模式，必须要保证网络的畅通，一旦把网络断开，桥接就会失效")],1),v._v(" "),i("br"),v._v(" "),i("em",[v._v("c. 专门的网络管理：\n专门的网络管理在编辑中的虚拟网络编辑器中，它默认配了两个虚拟网络除非是希望配置一个和外部隔绝的一个虚拟网")]),v._v(" "),i("br")]),v._v(" "),i("li",[v._v("下载centos镜像推荐："),i("br"),v._v("\n一般如果使用国外的链接地址下载镜像会比较慢，这里推荐使用国内的下载镜像的地址：163、jdcloud、aliyun、huaweicloud\n"),i("br")]),v._v(" "),i("li",[v._v("比较老的机子可能不支持虚拟化："),i("br"),v._v("\n进入BIOS(主板)，进入System Configuration，找到Virtualization Technology，选择Enabled")])])]),v._v(" "),i("h4",{attrs:{id:"新建虚拟机向导-vmare14"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#新建虚拟机向导-vmare14"}},[v._v("#")]),v._v(" 新建虚拟机向导（Vmare14）")]),v._v(" "),i("p",[i("strong",[i("font",{attrs:{color:"#666"}},[v._v("选择自定义高级")])],1)]),v._v(" "),i("ol",[i("li",[v._v("硬件兼容性 -> 选择最新版")]),v._v(" "),i("li",[v._v("安装程序光盘映像文件 -> 选择镜像文件（固定路径）\n"),i("ul",[i("li",[v._v("示例：“D:\\vm\\system”")])])]),v._v(" "),i("li",[v._v("虚拟机名称 -> 虚拟机在左边显示的名称")]),v._v(" "),i("li",[v._v("位置 -> 这是一个大坑，这里的位置是指，在安装好了虚拟机之后，要在硬盘上生成一个非常大的文件，实际上这个文件是一个虚拟磁盘，至少要有10g的富余空间。一般不占用系统空间（C盘）。\n"),i("ul",[i("li",[v._v("示例：“D:\\vm\\CentOS7”")])])]),v._v(" "),i("li",[v._v("处理器数量 -> 1")]),v._v(" "),i("li",[v._v("每个处理器的内核数量 -> 1-2\n"),i("ul",[i("li",[v._v("处理器就是cpu，我的计算机只有一个处理器(cpu)，6个内核。")]),v._v(" "),i("li",[v._v("这里的处理器数量和内核数量并不是越多越好，一般这里的选择要小于你的计算机本身的cpu和内核，它取决于你的计算机。")])])]),v._v(" "),i("li",[v._v("此虚拟机的内存 -> 2048MB")]),v._v(" "),i("li",[v._v("网络连接 -> 桥接\n"),i("ul",[i("li",[v._v("桥接就是直接使用你物理机的地址")])])]),v._v(" "),i("li",[v._v("下面的控制器、虚拟磁盘那些都选默认")]),v._v(" "),i("li",[v._v("创建一个新的虚拟盘")]),v._v(" "),i("li",[v._v("最大磁盘大小 -> 默认不动\n"),i("ul",[i("li",[v._v("下面立即分配所有磁盘空间不勾选，否则它会直接生成20G的大文件，一般如果不勾选的话，它是达不到20G的。")])])]),v._v(" "),i("li",[v._v("选择将虚拟磁盘存储为单个文件\n"),i("ul",[i("li",[v._v("分拆的意义在于把虚拟磁盘分成若干个，这样拷贝的时候速度会快一些，这是由底层的IO设备的特点来决定的，但一般创建了虚拟机之后，不会去动他，存储为单个文件，性能反而会高一些。")])])]),v._v(" "),i("li",[v._v("最后它就开始创建磁盘文件了。\n"),i("ul",[i("li",[v._v("你要去选择一下磁盘文件存放的位置")]),v._v(" "),i("li",[v._v("示例：“D:\\vm\\CentOS7\\CentOS7.vmdk”")])])]),v._v(" "),i("li",[v._v("点击完成\n"),i("br"),v._v(" "),i("strong",[i("font",{attrs:{color:"#666"}},[v._v("配置centos7详解")])],1)]),v._v(" "),i("li",[v._v("选择语言")]),v._v(" "),i("li",[v._v("等一段时间，本地化是自动读取系统配置自动配置的")]),v._v(" "),i("li",[v._v("系统配置\n"),i("ul",[i("li",[v._v("安装位置 -> 选择安装位置（点一下）之后其他默认，点击完成")]),v._v(" "),i("li",[v._v("KDUMP -> 取消勾选启用（禁用），它是供你调试用的，除非你要用C语言去做linux的开发，否则它开启的话，意义不大，反而会影响它本身的运行性能，它会把内存的数据转储到你的磁盘上")]),v._v(" "),i("li",[v._v("网络和主机名 ->  点击去之后，将以太网(我这里名称是ens33)打开，稍等一会，让它获取ip地址，ip地址获取成功，说明网络配置成功")]),v._v(" "),i("li",[v._v("SECURITYPOLICY -> 它是安全策略的配置，默认不动，否则后面使用会非常麻烦")])])]),v._v(" "),i("li",[v._v("设置root密码（超级管理员），如果对安全的要求不高（自己的虚拟机），可以设置弱密码，设置弱密码要点击两次完成才能设置成功，在公网上linux密码必须相当复杂，否则很容易被攻破。在生产环境下，避免使用root。")]),v._v(" "),i("li",[v._v("创建用户，这里的全名是给系统用的（仅仅只是展示），这里的用户名是给用户登陆用的。密码的设置和上面相同。")]),v._v(" "),i("li",[v._v("接下来等待它安装完成就完成了 。")])]),v._v(" "),i("hr"),v._v(" "),i("br"),v._v(" "),i("h2",{attrs:{id:"_3-认识linux环境"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-认识linux环境"}},[v._v("#")]),v._v(" 3. 认识Linux环境")]),v._v(" "),i("h4",{attrs:{id:"linux下的目录是做什么用的"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#linux下的目录是做什么用的"}},[v._v("#")]),v._v(" linux下的目录是做什么用的")]),v._v(" "),i("blockquote",[i("ul",[i("li",[v._v("linux和unix的目录，它是一种文件树的结构，linux属于根目录文件系统，但windows属于多根目录文件系统")]),v._v(" "),i("li",[v._v("我们在bin目录下为什么不能找到ls、cd等的那些命令？这里有一个概念，我们现在用的终端，它叫“shell（贝壳）”，那些常用的ls、cd等那些是shell本身被内置的命令，而在bin底下是那些不能被内置的命令（因为它们个头比较大或者使用频率比较低）")]),v._v(" "),i("li",[v._v("etc是最重要的目录，它专门用来放置配置文件的。其中以*.conf结尾的都是配置文件")])])]),v._v(" "),i("ul",[i("li",[v._v("/bin\n"),i("ul",[i("li",[v._v("系统有很多放置执⾏档的⽬录，但/bin⽐较特殊。因为/bin放置的是在单⼈维护模式下还能够被操作的指令。")]),v._v(" "),i("li",[v._v("在/bin底下的指令可以被root与⼀般帐号所使⽤，主要有："),i("br"),v._v("\ncat、chmod(修改权限)、chown、date、mv、mkdir、cp, bash等等常⽤的指令。")])])]),v._v(" "),i("li",[v._v("/boot（是核心文件，不能碰）\n"),i("ul",[i("li",[v._v("主要放置开机会使⽤到的档案，包括Linux核⼼档案以及开机选单与开机所需设定档等等。")]),v._v(" "),i("li",[v._v("Linux kernel常⽤的档名为：vmlinuz，如果使⽤的是grub这个开机管理程式，则还会存在/boot/grub/这个⽬录。引导操作系统的菜单。")])])]),v._v(" "),i("li",[v._v("/dev\n"),i("ul",[i("li",[v._v("在Linux系统上，任何装置与周边设备都是以档案的型态存在于这个⽬录当中。")]),v._v(" "),i("li",[v._v("只要通过存取这个⽬录下的某个档案，就等于存取某个装置。")]),v._v(" "),i("li",[v._v("⽐较重要的档案有/dev/null,/dev/zero, /dev/tty , /dev/lp, / dev/hd, /dev/sd*等等")])])]),v._v(" "),i("li",[v._v("/etc\n"),i("ul",[i("li",[v._v("系统主要的设定档⼏乎都放置在这个⽬录内，例如⼈员的帐号密码档、各种服务的启始档等等。")]),v._v(" "),i("li",[v._v("⼀般来说，这个⽬录下的各档案属性是可以让⼀般使⽤者查阅的，但是只有root有权⼒修改。")]),v._v(" "),i("li",[v._v("FHS建议不要放置可执⾏档(binary)在这个⽬录中。")]),v._v(" "),i("li",[v._v("⽐较重要的档案有： /etc/inittab, /etc/init.d/, /etc/modprobe.conf, /etc/X11/, /etc/fstab, /etc/sysconfig/等等。")]),v._v(" "),i("li",[v._v("另外，其下重要的⽬录有：/etc/init.d/：所有服务的预设启动script都是放在这⾥的，例如要启动或者关闭iptables的话：/etc/init.d/iptables start、/etc/init.d/、iptables stop/etc/xinetd.d/：这就是所谓的super daemon管理的各项服务的设定档⽬录。")]),v._v(" "),i("li",[v._v("/etc/X11/：与XWindow有关的各种设定档都在这⾥，尤其是xorg.conf或XF86Config这两个X Server的设定档。")])])]),v._v(" "),i("li",[v._v("/home（管理员的home目录是root）\n"),i("ul",[i("li",[v._v("这是系统预设的使⽤者家⽬录(home directory)。")]),v._v(" "),i("li",[v._v("在你新增⼀个⼀般使⽤者帐号时，预设的使⽤者家⽬录都会规范到这⾥来。")]),v._v(" "),i("li",[v._v("⽐较重要的是，家⽬录有两种代号，“~”代表当前使⽤者的家⽬录，⽽“~guest”则代表⽤户名为guest的家⽬录。")])])]),v._v(" "),i("li",[v._v("/lib\n"),i("ul",[i("li",[v._v("系统的函式库⾮常的多，⽽/lib放置的则是在开机时会⽤到的函式库，以及在/bin或/sbin底下的指令会呼叫的函式库⽽已 。")]),v._v(" "),i("li",[v._v("什么是函式库呢？妳可以将他想成是外挂，某些指令必须要有这些外挂才能够顺利完成程式的执⾏之意。")]),v._v(" "),i("li",[v._v("尤其重要的是/lib/modules/这个⽬录，因为该⽬录会放置核⼼相关的模组(驱动程式)。")])])]),v._v(" "),i("li",[v._v("/media\n"),i("ul",[i("li",[v._v("media是媒体的英⽂，顾名思义，这个/media底下放置的就是可移除的装置。 包括软碟、光碟、 DVD等等装置都暂时挂载于此。常⻅的档名有：/media/floppy,/media/cdrom等等。")])])]),v._v(" "),i("li",[v._v("/mnt\n"),i("ul",[i("li",[v._v("如果妳想要暂时挂载某些额外的装置，⼀般建议妳可以放置到这个⽬录中。在早时候，这个⽬录的⽤途与/media相同啦。只是有了/media之后，这个⽬录就⽤来暂时挂载⽤了。")])])]),v._v(" "),i("li",[v._v("/opt\n"),i("ul",[i("li",[v._v("这个是给第三⽅协⼒软体放置的⽬录。")]),v._v(" "),i("li",[v._v("什么是第三⽅协⼒软体啊？举例来说，KDE这个桌⾯管理系统是⼀个独⽴的计画，不过他可以安装到Linux系统中，因此KDE的软体就建议放置到此⽬录下了。")]),v._v(" "),i("li",[v._v("另外，如果妳想要⾃⾏安装额外的软体(⾮原本的distribution提供的)，那么也能够将你的软体安装到这⾥来。不过，以前的Linux系统中，我们还是习惯放置在/usr/local⽬录下。")])])]),v._v(" "),i("li",[v._v("/root\n"),i("ul",[i("li",[v._v("系统管理员(root)的家⽬录。")]),v._v(" "),i("li",[v._v("之所以放在这⾥，是因为如果进⼊单⼈维护模式⽽仅挂载根⽬录时，该⽬录就能够拥有root的家⽬录，所以我们会希望root的家⽬录与根⽬录放置在同⼀个分区中。")]),v._v(" "),i("li",[v._v("忘记密码centos要进入单用户模式 => "),i("code",[v._v("passwd")])])])]),v._v(" "),i("li",[v._v("/sbin\n"),i("ul",[i("li",[v._v("Linux有⾮常多指令是⽤来设定系统环境的，这些指令只有root才能够利⽤来设定系统，其他使⽤者最多只能⽤来查询⽽已。")]),v._v(" "),i("li",[v._v("放在/sbin底下的为开机过程中所需要的，⾥⾯包括了开机、修复、还原系统所需要的指令。")]),v._v(" "),i("li",[v._v("⾄于某些伺服器软体程式，⼀般则放置到/usr/sbin/当中。")]),v._v(" "),i("li",[v._v("⾄于本机⾃⾏安装的软体所产⽣的系统执⾏档(system binary)，则放置到/usr/local/sbin/当中了。常⻅的指令包括： fdisk, fsck, ifconfig, init, mkfs等等。")])])]),v._v(" "),i("li",[v._v("srv\n"),i("ul",[i("li",[v._v("srv可以视为service的缩写，是⼀些⽹路服务启动之后，这些服务所需要取⽤的资料⽬录。")]),v._v(" "),i("li",[v._v("常⻅的服务例如WWW, FTP等等。举例来说， WWW伺服器需要的⽹⻚资料就可以放置在/srv/www/⾥⾯。")]),v._v(" "),i("li",[v._v("呵呵，看来平时我们编写的代码应该放到这⾥了。")])])]),v._v(" "),i("li",[v._v("/tmp\n"),i("ul",[i("li",[v._v("这是让⼀般使⽤者或者是正在执⾏的程序暂时放置档案的地⽅。这个⽬录是任何⼈都能够存取的，所以你需要定期的清理⼀下。当然，重要资料不可放置在此⽬录啊。因为FHS甚⾄建议在开机时，应该要将/tmp下的资料都删除。")])])])]),v._v(" "),i("h4",{attrs:{id:"在windows下终端的类型"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#在windows下终端的类型"}},[v._v("#")]),v._v(" 在windows下终端的类型")]),v._v(" "),i("p",[i("strong",[i("font",{attrs:{color:"#666"}},[v._v("用来连接远程的服务器")])],1)]),v._v(" "),i("ul",[i("li",[v._v("putty(开源的但不推荐)")]),v._v(" "),i("li",[v._v("xshell\n"),i("ul",[i("li",[v._v("它是一个商业软件，在英文官网上下载")]),v._v(" "),i("li",[v._v("它很多年不升级（6.0），但并不落后")])])]),v._v(" "),i("li",[v._v("Cmdder(推荐)\n"),i("ul",[i("li",[v._v("它是一个增强型的终端，放置了大量的linux命令")])])]),v._v(" "),i("li",[i("a",{attrs:{href:"https://github.com/microsoft/Terminal",target:"_blank",rel:"noopener noreferrer"}},[v._v("Terminal"),i("OutboundLink")],1),v._v(" "),i("ul",[i("li",[v._v("微软发布的一个终端")])])])]),v._v(" "),i("hr"),v._v(" "),i("br"),v._v(" "),i("h2",{attrs:{id:"_4-前端开发必须要懂的知识"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_4-前端开发必须要懂的知识"}},[v._v("#")]),v._v(" 4. 前端开发必须要懂的知识")]),v._v(" "),i("h4",{attrs:{id:"网络端口"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#网络端口"}},[v._v("#")]),v._v(" 网络端口")]),v._v(" "),i("ul",[i("li",[v._v("什么是端口\n"),i("ul",[i("li",[v._v("如果想通过网络去访问另外一台电脑，必须得去开一个门，这个门，实际上操作系统上有很多门，它们都有它自己的用途，我们究竟需要开什么门，需要在上面编一个号，http这个门是80号门等等，这些门不能乱窜，如果乱窜，就会发生端口冲突。")]),v._v(" "),i("li",[v._v("换句话说，一个端口，在同一个时间内，只能被一个进程去使用。")])])]),v._v(" "),i("li",[v._v("默认端口\n"),i("ul",[i("li",[v._v("http默认端口80")]),v._v(" "),i("li",[v._v("https默认端口 443")]),v._v(" "),i("li",[v._v("http 代理端口 8080")])])])]),v._v(" "),i("h4",{attrs:{id:"什么是服务"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#什么是服务"}},[v._v("#")]),v._v(" 什么是服务")]),v._v(" "),i("ul",[i("li",[v._v("什么是服务\n"),i("ul",[i("li",[v._v("服务是一种应用程序类型，它在后台运行。服务应用程序通常可以在本地和通过网络为用户提供一些功能，例如客户端/服务器应用程序、Web服务器、数据库服务器以及其他基于服务器的应用程序。")])])]),v._v(" "),i("li",[v._v("在linux下查看服务\n"),i("ul",[i("li",[i("code",[v._v("systemctl")]),v._v(" => 按ctrl+c退出")]),v._v(" "),i("li",[i("code",[v._v("systemctl status nginx")]),v._v(" => 查看nginx服务状态")]),v._v(" "),i("li",[i("code",[v._v("systemctl start nginx")]),v._v(" => 开启服务")]),v._v(" "),i("li",[i("code",[v._v("systemctl stop nginx")]),v._v(" => 停止服务")]),v._v(" "),i("li",[i("code",[v._v("systemctl restart nginx")]),v._v(" => 重启服务")]),v._v(" "),i("li",[i("code",[v._v("nginx -s reload")]),v._v(" => 不停止服务，重新读取一次")])])])]),v._v(" "),i("h4",{attrs:{id:"什么是终端"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#什么是终端"}},[v._v("#")]),v._v(" 什么是终端")]),v._v(" "),i("ul",[i("li",[v._v("终端（Terminal）也称终端设备，是计算机网络中处于网络最外围的设备，主要用于用户信息的输入以及处理结果的输出等。")]),v._v(" "),i("li",[v._v("在早期计算机系统中，由于计算机主机昂贵，因此一个主机（IBM大型计算机）一般会配置多个终端，这些终端本身不具备计算能力，仅仅承担信息输入输出的工作，运算和处理均由主机来完成。")]),v._v(" "),i("li",[v._v("在个人计算机时代，个人计算机可以运行称为终端仿真器的程序来模仿一个终端的工作。")])]),v._v(" "),i("h4",{attrs:{id:"如何使用cmder连接远程服务器"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#如何使用cmder连接远程服务器"}},[v._v("#")]),v._v(" 如何使用Cmder连接远程服务器")]),v._v(" "),i("p",[i("strong",[i("font",{attrs:{color:"#666"}},[v._v("使用ssh命令")])],1),i("br")]),v._v(" "),i("ul",[i("li",[v._v("示例："),i("code",[v._v("ssh root@192.168.0.115")])]),v._v(" "),i("li",[v._v("它会有一段提示，你正在登陆全新的服务器，然后告诉我们服务器的特征值（服务器指纹），问我们是否继续，然后输入yes才能继续，它是用来防止有人伪造服务器，套你的口令。")]),v._v(" "),i("li",[v._v("然后输入密码，输入密码的时候它不回显，因为安全性问题，别人不知道你的密码会有多少位。")])]),v._v(" "),i("h4",{attrs:{id:"最简单的linux命令"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#最简单的linux命令"}},[v._v("#")]),v._v(" 最简单的linux命令")]),v._v(" "),i("ul",[i("li",[v._v("exit => 登出\n"),i("ul",[i("li",[v._v("需要有安全意识，离开计算机及时退出终端")])])]),v._v(" "),i("li",[v._v("ip addr => 查看IP地址\n"),i("ul",[i("li",[v._v("ifconfig比较古老，使用ip组合命令")])])]),v._v(" "),i("li",[v._v("pwd => 查看当前的目录")])]),v._v(" "),i("h4",{attrs:{id:"如何远程传输文件到linux服务器"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#如何远程传输文件到linux服务器"}},[v._v("#")]),v._v(" 如何远程传输文件到linux服务器")]),v._v(" "),i("p",[i("strong",[i("font",{attrs:{color:"#666"}},[v._v("在cmder中使用scp命令")])],1)]),v._v(" "),i("ol",[i("li",[v._v("在windows环境下，进入某个盘符，找到某个文件，示例："),i("br"),v._v(" "),i("code",[v._v("e:")]),v._v(" => "),i("code",[v._v("dir")]),v._v(" => "),i("code",[v._v("mkdir test")]),v._v(" => "),i("code",[v._v("cd test")]),v._v(" => "),i("code",[v._v("echo 文件中的内容>a.txt")]),v._v(" => "),i("code",[v._v("type a.txt")])]),v._v(" "),i("li",[v._v("在linux环境下查看当前目录，示例："),i("br"),v._v(" "),i("code",[v._v("pwd")])]),v._v(" "),i("li",[v._v("到windows环境下，在windows的当前目录下，把windows下找到的文件用scp传到linux当前目录下，示例："),i("br"),v._v(" "),i("code",[v._v("scp ./a.txt root@192.168.0.115:/root")]),v._v(" "),i("ul",[i("li",[v._v("在这里输完ip之后要先加上冒号，再加/，后面带linux下的路径")])])]),v._v(" "),i("li",[v._v("输入密码，传输成功")]),v._v(" "),i("li",[v._v("到linux环境下，查看是否传输成功，示例："),i("br"),v._v(" "),i("code",[v._v("ls")]),v._v(" => "),i("code",[v._v("cat a.txt")])])]),v._v(" "),i("h4",{attrs:{id:"如何对linux中的网卡进行设置"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#如何对linux中的网卡进行设置"}},[v._v("#")]),v._v(" 如何对linux中的网卡进行设置")]),v._v(" "),i("ol",[i("li",[v._v("先检查虚拟硬件\n"),i("ul",[i("li",[v._v("虚拟机配置必须桥接， 物理机（自己的电脑）网卡是否被激活")]),v._v(" "),i("li",[v._v("如果安装的时候没有激活，就要在etc下找网卡的配置文件")])])]),v._v(" "),i("li",[v._v("先进入etc目录。 "),i("code",[v._v("cd etc")])]),v._v(" "),i("li",[v._v("网卡的配置文件在sysconfig下面。 "),i("br"),v._v(" "),i("code",[v._v("cd sysconfig/network-scripts")])]),v._v(" "),i("li",[v._v("ll查看，带前缀ifcfg，即网卡的配置文件（网卡的名字ens33）")]),v._v(" "),i("li",[v._v("查看配置文件"),i("br"),v._v(" "),i("code",[v._v("cat ifcfg-ens33")])]),v._v(" "),i("li",[v._v("如果没有激活ONBOOT会显示为no，要用vi改成yes\n"),i("ul",[i("li",[v._v("输入指令："),i("code",[v._v("vi ifcfg-ens33")])]),v._v(" "),i("li",[v._v("默认只读状态，敲一下i变成编辑状态")]),v._v(" "),i("li",[v._v("按一下esc最下角INSERT不见了")]),v._v(" "),i("li",[v._v("输入:wq保存并退出\n"),i("ul",[i("li",[v._v("w指write（写[保存]）")]),v._v(" "),i("li",[v._v("q指quit（退出）")]),v._v(" "),i("li",[v._v("不能使用qw，必须先保存再退出")])])])])]),v._v(" "),i("li",[v._v("开启网卡\n"),i("code",[v._v("ifup ens33")])]),v._v(" "),i("li",[v._v("关闭网卡\n"),i("code",[v._v("ifdown ens33")])])]),v._v(" "),i("h4",{attrs:{id:"vi命令-文本编辑器-行"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#vi命令-文本编辑器-行"}},[v._v("#")]),v._v(" vi命令（文本编辑器[行]）")]),v._v(" "),i("ul",[i("li",[v._v("vi 文件名 => 进入某个文件的编辑")]),v._v(" "),i("li",[v._v(":q => 退出")]),v._v(" "),i("li",[v._v(":q! => 强行退出(不保存)")])]),v._v(" "),i("h4",{attrs:{id:"nano的安装和使用"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#nano的安装和使用"}},[v._v("#")]),v._v(" nano的安装和使用")]),v._v(" "),i("p",[i("strong",[i("font",{attrs:{color:"#666"}},[v._v("安装")])],1)]),v._v(" "),i("ul",[i("li",[v._v("yum是linux的软件库，使用yum安装nano，示例："),i("br"),v._v(" "),i("code",[v._v("yum install nano")])]),v._v(" "),i("li",[v._v("继续(y)")]),v._v(" "),i("li",[v._v("确认指纹密钥(y)")]),v._v(" "),i("li",[v._v("输入nano启动文本编辑器")])]),v._v(" "),i("p",[i("strong",[i("font",{attrs:{color:"#666"}},[v._v("使用")])],1)]),v._v(" "),i("ul",[i("li",[v._v("^ 表示ctrl")]),v._v(" "),i("li",[v._v("ctrl + o 写入")]),v._v(" "),i("li",[v._v("ctrl + x 退出")])]),v._v(" "),i("h4",{attrs:{id:"linux中的其他命令"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#linux中的其他命令"}},[v._v("#")]),v._v(" linux中的其他命令")]),v._v(" "),i("ul",[i("li",[v._v("解压缩(*.tar.bz)\n"),i("ul",[i("li",[v._v("tar -xvvf *.tar.bz")]),v._v(" "),i("li",[v._v("-xvvf => 解压缩.bz格式的参数，不用的压缩包格式，参数不一样，*.gz格式的参数则是-xzzf")])])])]),v._v(" "),i("hr"),v._v(" "),i("br"),v._v(" "),i("h2",{attrs:{id:"_5-安装linux开发环境"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_5-安装linux开发环境"}},[v._v("#")]),v._v(" 5. 安装linux开发环境")]),v._v(" "),i("h4",{attrs:{id:"安装node"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#安装node"}},[v._v("#")]),v._v(" 安装node")]),v._v(" "),i("p",[i("strong",[v._v("不能直接使用yum安装，要去下载安装nodejs的源")])]),v._v(" "),i("ol",[i("li",[v._v("添加官方的yum源"),i("br"),v._v(" "),i("code",[v._v("curl -sL https://rpm.nodesource.com/setup_11.x | bash -")])]),v._v(" "),i("li",[v._v("用yum安装nodejs（y表示一路确定）\n"),i("code",[v._v("yum install -y nodejs")])]),v._v(" "),i("li",[v._v("查看安装的版本\n"),i("code",[v._v("node -v")])])]),v._v(" "),i("hr"),v._v(" "),i("p",[i("font",{attrs:{color:"#666",size:"5"}},[v._v("~End~")])],1)])}),[],!1,null,null,null);_.default=t.exports}}]);