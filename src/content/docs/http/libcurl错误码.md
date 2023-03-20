---
title: "http学习之旅"
description: "Lorem ipsum dolor sit amet - 4"
---

***
[http学习网站](https://developer.mozilla.org/zh-CN/docs/Web/HTTP)


 ### 错误码全部解析：

CURLcode
几乎所有的“easy”界面函数都返回一个CURLcode错误代码。无论什么，使用curl_easy_setopt选项CURLOPT_ERRORBUFFER是一个好主意，因为它会给你一个人类可读的错误字符串，可以提供更多的错误原因的细节，而不仅仅是错误代码。curl_easy_strerror可以被调用来从给定的CURLcode号获取错误字符串。

CURLcode是以下之一：

CURLE_OK（0）

一切都好 照常进行。

CURLE_UNSUPPORTED_PROTOCOL（1）

您传递给libcurl的URL使用此libcurl不支持的协议。支持可能是您没有使用的编译时选项，它可能是拼写错误的协议字符串，或只是一个协议libcurl没有代码。

CURLE_FAILED_INIT（2）

非常早的初始化代码失败。这可能是一个内部错误或问题，或资源问题，在初始时间无法完成某些基本的事情。

CURLE_URL_MALFORMAT（3）

网址格式不正确

CURLE_NOT_BUILT_IN（4）

由于构建时间决定，在此libcurl中内置了一个请求的功能，协议或选项。这意味着在构建libcurl时，功能或选项未启用或显式禁用，为了使其功能得以重建libcurl。

CURLE_COULDNT_RESOLVE_PROXY（5）

无法解析代理。给定的代理主机无法解决。

CURLE_COULDNT_RESOLVE_HOST（6）

无法解析主机。给定的远程主机未解决。

CURLE_COULDNT_CONNECT（7）

无法连接（）到主机或代理。

CURLE_FTP_WEIRD_SERVER_REPLY（8）

服务器发送的数据libcurl无法解析。此错误代码是用于不仅仅是FTP更多的别名是CURLE_WEIRD_SERVER_REPLY自7.51.0。

CURLE_REMOTE_ACCESS_DENIED（9）

我们被拒绝访问URL中给出的资源。对于FTP，尝试更改为远程目录时会发生这种情况。

CURLE_FTP_ACCEPT_FAILED（10）

当使用活动的FTP会话等待服务器连接时，通过控制连接或类似的方式发送错误代码。

CURLE_FTP_WEIRD_PASS_REPLY（11）

将FTP密码发送到服务器后，libcurl会对此进行适当的回复。此错误代码表示返回了意外的代码。

CURLE_FTP_ACCEPT_TIMEOUT（12）

在等待服务器连接的活动FTP会话期间，CURLOPT_ACCEPTTIMEOUT_MS（或内部默认）超时过期。

CURLE_FTP_WEIRD_PASV_REPLY（13）

libcurl无法从服务器获得明智的结果，作为对PASV或EPSV命令的响应。服务器有缺陷。

CURLE_FTP_WEIRD_227_FORMAT（14）

FTP服务器作为对PASV命令的响应返回227行。如果libcurl无法解析该行，则返回此代码。

CURLE_FTP_CANT_GET_HOST（15）

查找用于新连接的主机的内部故障。

CURLE_HTTP2（16）

在HTTP2框架层中检测到问题。这有点通用，可以是几个问题中的一个，有关详细信息，请参阅错误缓冲区。

CURLE_FTP_COULDNT_SET_TYPE（17）

尝试将传输模式设置为二进制或ASCII时收到错误。

CURLE_PARTIAL_FILE（18）

文件传输比预期更短或更大。当服务器首先报告预期的传输大小，然后传送与以前给定的大小不匹配的数据时，会发生这种情况。

CURLE_FTP_COULDNT_RETR_FILE（19）

这是对“RETR”命令或零字节传输完成的奇怪回复。

CURLE_QUOTE_ERROR（21）

向远程服务器发送自定义“QUOTE”命令时，其中一个命令返回的错误代码为400或更高（对于FTP）或以其他方式指示命令不成功完成。

CURLE_HTTP_RETURNED_ERROR（22）

如果CURLOPT_FAILONERROR设置为TRUE并返回错误代码> = 400，则返回此值。

CURLE_WRITE_ERROR（23）

将接收的数据写入本地文件时发生错误，或者从写入回调将错误返回给libcurl。

CURLE_UPLOAD_FAILED（25）

无法启动上传。对于FTP，服务器通常会拒绝STOR命令。错误缓冲区通常包含服务器的解释。

CURLE_READ_ERROR（26）

读取本地文件或读回读返回的错误有问题。

CURLE_OUT_OF_MEMORY（27）

内存分配请求失败。这是严重的坏事，如果发生这种情况，事情就会严重瘫痪。

CURLE_OPERATION_TIMEDOUT（28）

操作超时 根据条件达到指定的超时期限。

CURLE_FTP_PORT_FAILED（30）

FTP PORT命令返回错误。这主要发生在你没有指定一个足够好的libcurl使用的地址。请参阅CURLOPT_FTPPORT。

CURLE_FTP_COULDNT_USE_REST（31）

FTP REST命令返回错误。如果服务器是合理的，这绝对不会发生。

CURLE_RANGE_ERROR（33）

服务器不支持或接受范围请求。

CURLE_HTTP_POST_ERROR（34）

这是一个奇怪的错误，主要是由于内部的混乱造成的。

CURLE_SSL_CONNECT_ERROR（35）

SSL / TLS握手中的某个地方出现问题。你真的想要错误缓冲区，并在那里读取消息，因为它更明确地指出了问题。可以是证书（文件格式，路径，权限），密码等。

CURLE_BAD_DOWNLOAD_RESUME（36）

由于指定的偏移超出文件边界，所以无法恢复下载。

CURLE_FILE_COULDNT_READ_FILE（37）

FILE：//提供的文件无法打开。最可能的原因是文件路径不能识别现有的文件。你是否检查文件权限？

CURLE_LDAP_CANNOT_BIND（38）

LDAP无法绑定。LDAP绑定操作失败。

CURLE_LDAP_SEARCH_FAILED（39）

LDAP搜索失败。

CURLE_FUNCTION_NOT_FOUND（41）

找不到功能 没有找到所需的zlib函数。

CURLE_ABORTED_BY_CALLBACK（42）

通过回调中止。回调返回到libcurl“abort”。

CURLE_BAD_FUNCTION_ARGUMENT（43）

内部错误。一个函数调用了一个坏的参数。

CURLE_INTERFACE_FAILED（45）

接口错误。指定的出站界面无法使用。使用CURLOPT_INTERFACE设置要用于传出连接的源IP地址的接口。

CURLE_TOO_MANY_REDIRECTS（47）

重定向太多 当以下重定向时，libcurl命中最大数量。用CURLOPT_MAXREDIRS设置你的限制。

CURLE_UNKNOWN_OPTION（48）

传递给libcurl的选项不被识别/已知。请参阅相应的文档。这很可能是程序中使用libcurl的问题。错误缓冲区可能包含更多关于哪个确切选项的具体信息。

CURLE_TELNET_OPTION_SYNTAX（49）

telnet选项字符串被非法格式化。

CURLE_PEER_FAILED_VERIFICATION（51）

远程服务器的SSL证书或SSH md5指纹被认为不正常。

CURLE_GOT_NOTHING（52）

没有从服务器返回任何东西，在这种情况下，没有任何东西被认为是错误。

CURLE_SSL_ENGINE_NOTFOUND（53）

未找到指定的加密引擎。

CURLE_SSL_ENGINE_SETFAILED（54）

默认设置所选的SSL加密引擎失败！

CURLE_SEND_ERROR（55）

发送网络数据失败

CURLE_RECV_ERROR（56）

接收网络数据失败。

CURLE_SSL_CERTPROBLEM（58）

本地客户端证书出现问题。

CURLE_SSL_CIPHER（59）

无法使用指定的密码。

CURLE_SSL_CACERT（60）

对等证书无法通过已知的CA证书进行身份验证。

CURLE_BAD_CONTENT_ENCODING（61）

无法识别的传输编码。

CURLE_LDAP_INVALID_URL（62）

无效的LDAP网址

CURLE_FILESIZE_EXCEEDED（63）

超过最大文件大小。

CURLE_USE_SSL_FAILED（64）

请求的FTP SSL级别失败。

CURLE_SEND_FAIL_REWIND（65）

当发送操作卷曲不得不倒带数据重发时，倒带操作失败。

CURLE_SSL_ENGINE_INITFAILED（66）

启动SSL引擎失败。

CURLE_LOGIN_DENIED（67）

远程服务器拒绝卷曲登录（7.13.1中添加）

CURLE_TFTP_NOTFOUND（68）

在TFTP服务器上找不到文件。

CURLE_TFTP_PERM（69）

TFTP服务器上的权限问题

CURLE_REMOTE_DISK_FULL（70）

超出服务器上的磁盘空间。

CURLE_TFTP_ILLEGAL（71）

非法TFTP操作。

CURLE_TFTP_UNKNOWNID（72）

未知的TFTP传输ID。

CURLE_REMOTE_FILE_EXISTS（73）

文件已存在，不会被覆盖。

CURLE_TFTP_NOSUCHUSER（74）

TFTP服务器不应该返回此错误。

CURLE_CONV_FAILED（75）

字符转换失败。

CURLE_CONV_REQD（76）

来电者必须注册转换回调。

CURLE_SSL_CACERT_BADFILE（77）

阅读SSL CA证书（路径？访问权限？）的问题？

CURLE_REMOTE_FILE_NOT_FOUND（78）

URL中引用的资源不存在。

CURLE_SSH（79）

在SSH会话期间发生未指定的错误。

CURLE_SSL_SHUTDOWN_FAILED（80）

无法关闭SSL连接。

CURLE_AGAIN（81）

Socket还没有准备好发送/ recv等待，直到它准备好，然后再试一次。此返回代码仅从curl_easy_recv和curl_easy_send（在7.18.2中添加） 返回，

CURLE_SSL_CRL_BADFILE（82）

无法加载CRL文件（在7.19.0中添加）

CURLE_SSL_ISSUER_ERROR（83）

发行人检查失败（7.19.0中添加）

CURLE_FTP_PRET_FAILED（84）

FTP服务器根本不了解PRET命令，也不支持给定的参数。使用CURLOPT_CUSTOMREQUEST时要小心，在PASV之前也会使用自定义LIST命令与PRET CMD一起发送。（在7.20.0中添加）

CURLE_RTSP_CSEQ_ERROR（85）

RTSP CSeq号码不匹配。

CURLE_RTSP_SESSION_ERROR（86）

RTSP会话标识符不匹配。

CURLE_FTP_BAD_FILE_LIST（87）

无法解析FTP文件列表（在FTP通配符下载期间）。

CURLE_CHUNK_FAILED（88）

块回调报告错误。

CURLE_NO_CONNECTION_AVAILABLE（89）

（仅供内部使用，永远不会由libcurl返回）无连接可用，会话将排队。（加入7.30.0）

CURLE_SSL_PINNEDPUBKEYNOTMATCH（90）

无法匹配使用CURLOPT_PINNEDPUBLICKEY指定的固定密钥。

CURLE_SSL_INVALIDCERTSTATUS（91）

使用CURLOPT_SSL_VERIFYSTATUS询问状态时返回失败。

CURLE_HTTP2_STREAM（92）

HTTP / 2框架层中的流错误。

CURLE_OBSOLETE *

这些错误代码将永远不会被返回。它们在旧的libcurl版本中使用，目前未使用。

CURLMcode
这是libcurl多接口中函数使用的通用返回码。还要考虑curl_multi_strerror。

CURLM_CALL_MULTI_PERFORM（-1）

这不是真的错误。这意味着您应该再次调用curl_multi_perform，而不用在之间执行select（）或类似操作。在版本7.20.0之前，这可以由curl_multi_perform返回，但是在以后的版本中，这个返回码永远不会被使用。

CURLM_OK（0）

事情没事

CURLM_BAD_HANDLE（1）

传入句柄不是有效的CURLM句柄。

CURLM_BAD_EASY_HANDLE（2）

一个简单的句柄不好/有效。这可能意味着它根本不是一个简单的句柄，或者可能是手柄已被这个或另一个多把手使用。

CURLM_OUT_OF_MEMORY（3）

你注定了

CURLM_INTERNAL_ERROR（4）

这只能在libcurl错误时返回。请向我们报告！

CURLM_BAD_SOCKET（5）

传入套接字不是libcurl已经知道的有效套接字。（在7.15.4中添加）

CURLM_UNKNOWN_OPTION（6）

curl_multi_setopt（）与不受支持的选项（在7.15.4中添加）

CURLM_ADDED_ALREADY（7）

已经添加到多个句柄的一个简单的句柄被尝试添加第二次。（在7.32.1中添加）

CURLSHcode
“share”界面将返回一个CURLSHcode来指示发生错误的时间。还要考虑curl_share_strerror。

CURLSHE _（0）

一切都好 照常进行。

CURLSHE_BAD_OPTION（1）

一个无效的选项被传递给该函数。

CURLSHE_IN_USE（2）

共享对象当前正在使用中。

CURLSHE_INVALID（3）

一个无效的共享对象被传递给该函数。

CURLSHE_NOMEM（4）

没有足够的内存可用。（添加7.12.0）

CURLSHE_NOT_BUILT_IN（5）

所请求的共享无法完成，因为您使用的库没有启用该特定功能。（在7.23.0中添加）