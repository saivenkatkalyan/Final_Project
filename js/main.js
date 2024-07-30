
"use strict"
var click_counter = 1;
var $ = function(id)
{
    return document.getElementById(id);
};

function updateTime() {
    var now = new Date();
    var month = String(now.getMonth() + 1).padStart(2,"0");
    var day = String(now.getDate()).padStart(2,"0");
    var year =String(now.getFullYear()).slice(-2)

    var hours = String(now.getHours()).padStart(2,"0");
    var minutes = String(now.getMinutes()).padStart(2,"0");
    var seconds = String(now.getSeconds()).padStart(2,"0");
    console.log(month);
    /*
        Date object works with dates and times.
        Available methods:
            getMonth()	    Returns the month (from 0-11) 
                **Note**:   month is 0 indexed
            getDate()	    Returns the day of the month (from 1-31)
                **Note**:   no padding zero in front
            getFullYear()	Returns the year 
                **Note**:   By default, it returns YYYY
            getHours()      Returns the hour (from 0-23)
                **Note**:   no padding zero in front
            getMinutes()	Returns the minutes (from 0-59)
                **Note**:   no padding zero in front
            getSeconds()	Returns the seconds (from 0-59)
                **Note**:   no padding zero in front
        Exmaple: 
            var month = now.getMonth(); -> returns 6
        ----------------------------------------------------------------------------------------
        padStart(): to add a padding String from the start                                      
        Syntax: string.padStart(length, string)                                                 
        Parameter:                                                                              
            length - required, the length of the resulting string.                              
            string - optional, the string to pad with. Default is space.                        
        Return Value:                                                                           
            A String of the specified length, with the padding applied from the start.          
        
        ----------------------------------------------------------------------------------------
        slice(): selects from a given start, up to a (not inclusive) given end.                 
        Syntax: array.slice(start, end)                                                         
        Parameter:                                                                              
            start - optional, start position. Default is 0.                                     
            string - optional, end position. Default is 0.                        
        Return Value:                                                                           
            A new array containing the selected elements.     
        ----------------------------------------------------------------------------------------

        ${expression} : Template literals
    */

    var formattedTime = `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;
    $("current_time").innerHTML = formattedTime;
};
var switch_language = function()
{
    var html_str = "";
    if(click_counter % 3 == 0)
    {
        html_str = "<h2>Whiskers</h2>";
        html_str += "<h5>Introduction</h5>";
        html_str +="<p>In a world where coding prowess and ninja agility are paramount, there emerges a unique hero: meet Whiskers, the Cat Coder Ninja. With the stealth of a shadow and the brilliance of a master programmer, Whiskers navigates the digital landscape with unparalleled finesse. By day, he is a seemingly ordinary feline, but by night, he transforms into a legendary coder, tackling complex algorithms and vanquishing bugs with a flick of his paw. Whether he's scaling virtual firewalls or pouncing on security vulnerabilities, Whiskers combines his ninja reflexes with his coding expertise to protect and optimize the digital realm. Get ready to embark on thrilling adventures with the most extraordinary feline coder you've ever met!</p> "
        click_counter++;
    }
    else if(click_counter % 3 == 1)
    {
     html_str = "<h2>胡须</h2>";
     html_str += "<h5>Introduction</h5>";
     html_str += "<p>在一个编码能力和忍者敏捷性至关重要的世界中，出现了一位独特的英雄：遇见 Cat Coder Ninja Whiskers。凭借影子的隐身性和程序员大师的才华，Whiskers 以无与伦比的技巧在数字领域中导航。白天，他是一只看似普通的猫科动物，但到了晚上，他变成了一个传奇的程序员，用爪子轻弹就能处理复杂的算法并消灭虫子。无论是扩展虚拟防火墙还是攻击安全漏洞，Whiskers 都将他的忍者反应能力与他的编码专业知识相结合，以保护和优化数字领域。准备好与你见过的最非凡的猫科动物编码员一起踏上惊心动魄的冒险吧！</p>"   
     click_counter++;
    }
    else
    {
     html_str ="<h2>मूंछ</h2>";
     html_str +="<h5>Introduction</h5>";
     html_str +="<p>ऐसी दुनिया में जहां कोडिंग कौशल और निंजा चपलता सर्वोपरि है, एक अद्वितीय नायक उभरता है: व्हिस्कर्स, कैट कोडर निंजा से मिलें। एक छाया के चुपके और एक मास्टर प्रोग्रामर की प्रतिभा के साथ, व्हिस्कर्स अद्वितीय चालाकी के साथ डिजिटल परिदृश्य को नेविगेट करता है। दिन तक, वह एक साधारण बिल्ली का बच्चा है, लेकिन रात तक, वह एक पौराणिक कोडर में बदल जाता है, जटिल एल्गोरिदम से निपटता है और अपने पंजे के एक झटके के साथ कीड़े को जीतता है।चाहे वह वर्चुअल फायरवॉल को स्केल कर रहा हो या सुरक्षा कमजोरियों पर उछल रहा हो, व्हिस्कर्स डिजिटल क्षेत्र की सुरक्षा और अनुकूलन के लिए अपनी कोडिंग विशेषज्ञता के साथ अपने निंजा रिफ्लेक्सिस को जोड़ती है। अब तक मिले सबसे असाधारण बिल्ली के समान कोडर के साथ रोमांचकारी कारनामों को शुरू करने के लिए तैयार हो जाइए!</p>"
     click_counter++;
    }
    $("introduction").innerHTML = html_str;
}
var hide_detail = function(image)
   {
    // console.log($("plus").nextElementSibling);
    var siblings =[];
    var sibling = image.nextElementSibling;
    while(sibling)
        {
        siblings.push(sibling);
        sibling = sibling.nextElementSibling;
        }
    console.log(siblings[2]);
    for(var i = 1; i < siblings.length; i++)
    {
        if(siblings[i].style.display == "none")
        {
            siblings[i].style.display = "block";
            image.src = "img/minus.png";

        }
        else{
            siblings[i].style.display = "none";
            image.src = "img/plus.png";
        }
    }
        // siblings.style.display ="none";
        // siblings.style.display = "none";
    // if($("description").style.display == "none")
    // {
    // $("description").style.display = "block";
    // $("link_image").style.display = "block";
    // $("plus").src= "img/minus.png";
    // }
    // else{
    // $("description").style.display ="none";
    // $("link_image").style.display ="none";
    // $("plus").src= "img/plus.png";
    // }
};


window.onload = function()
{
    $("plus").onclick = hide_detail;
    $("language_switch").onclick = switch_language;

    var divs = document.getElementsByClassName("box");
    for(var i = 0; i < divs.length; i++)
    {
        var icon_image = divs[i].firstElementChild;
        icon_image.onclick = function()
        {
          hide_detail(this);
        };
    }
    updateTime(); // Update the time immediately on load
    setInterval(updateTime, 1000); // Update the time every second
};