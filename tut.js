'use strict';

var webdriver=require("selenium-webdriver"),
	By = webdriver.By,
	until = webdriver.until;


//Creates function with new WebDriver instances
// function createDriver(){
// 	var driver = new webdriver.Builder()
// 		//.usingServer('http://localhost:4444/wd/hub')
// 		.withCapabilities(webdriver.Capabilities.chrome())
// 		.build();
// 	driver.manage().timeouts().implicitlyWait(20000);
// 	return driver;
// };

var driver = new webdriver.Builder()
	.forBrowser('chrome')
	.build();

function getTitle(){
	driver.getTitle().then((title)=>{
		console.log(`TITLE: ${title}`);
	});
};

// var browser = createDriver();
driver.manage().window().maximize();


driver.get('https://www.tut.by')
	.then(()=>{
		return getTitle();
	})
	.then(()=>{
		return driver.findElement(By.linkText('Афиша')).click();
	})
	.then(()=>{
		driver.wait(until.elementLocated(By.name('str')));
		return driver.findElement(By.name('str')).sendKeys('салют');
	})
	.then(()=>{
		return driver.findElement(By.css('[value="Найти"]')).click();
	})
	.then(()=>{
		return driver.findElement(By.css('[title="Бесплатно"]')).click();
	})
	.then(()=>{
		return driver.executeScript('window.scrollTo(0, document.body.scrollHeight)'); //to the end of the page
	})
	.then(()=>{
		return driver.findElement(By.css('a.mobile_button')).click();
	})
	.then(()=>{
		return driver.quit();
	});



