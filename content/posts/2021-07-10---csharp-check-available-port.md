---
title:      "C# Socket 사용 가능한 포트 검사"
slug:       "csharp-check-available-port"
date:       "2021-07-10T15:11:30"
template:   "post"
draft:      false 
category:   "C#"
tags:
  - "C#"
  - "SocketException"
description: "System.Net.Sockets.SocketException '액세스 권한에 의해 숨겨진 소켓에 액세스를 시도했습니다'
 다른 프로그램에서 이미 사용하고 있는 포트를 사용 하려고 할 경우 위 오류가 나타남" 
--- 

### 문제

```csharp
class Program
{
    static void Main(string[] args)
    {  
        var listener = new TcpListener(IPAddress.Loopback, 80); // 이미 사용중인 포트
        listener.Start();
    }
}
```

> System.Net.Sockets.SocketException: '액세스 권한에 의해 숨겨진 소켓에 액세스를 시도했습니다'

다른 프로그램에서 이미 사용하고 있는 포트를 사용 하려고 할 경우 위 오류가 나타남

### 해결

TcpListener 객체를 생성하기 전 포트가 이미 사용중인지 검사한다.

```csharp
class Program
{
    static void Main(string[] args)
    {
        while (true)
        {
            Console.Write("포트 번호 입력: ");
            int port;

            if (int.TryParse(Console.ReadLine(), out port))
            {
                Console.WriteLine((PortInUse(port)) ?
                    "사용중" :
                    "사용가능");
            }
        }
    } 
    /*
        사용중인 포트인지 검사.
    */
    private static bool PortInUse(int port)
    { 
        var properties = IPGlobalProperties.GetIPGlobalProperties();
        var connections = properties.GetActiveTcpListeners();
        var inUsePorts = connections.Select(con => con.Port);

        return inUsePorts.Contains(port);
    }
    /*
        사용 가능한 포트 반환
    */
    public static List<int> GetAvailablePorts(int startPort)
    {
        var ports = new List<int>();
        
        var properties = IPGlobalProperties.GetIPGlobalProperties();
        var connections = properties.GetActiveTcpListeners();
        var inUsePorts = connections.Select(con => con.Port);
        
        for (int i = startPort; i < ushort.MaxValue; i++) // 포트 범위 
        {
            if (inUsePorts.Contains(i) == false)
                ports.Add(i);
        }
        return ports;
    }
}

```

### 추가정보

[IPGlobalProperties.GetActiveTcpListeners Method](https://docs.microsoft.com/ko-kr/dotnet/api/system.net.networkinformation.ipglobalproperties.getactivetcplisteners?view=netframework-4.8)

