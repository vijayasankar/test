package coop.vickyDemo.step_definitions;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class NewSteps {

	public WebDriver  driver;
	
	
	//public static List<HashMap<String,String>> datamap = null;
	
	public NewSteps()
	{
		driver = Hooks.driver;
		
		
	}
	
	@Given("^I am in Coop money home page$")
	public void i_am_in_Coop_money_home_page() throws Throwable {
		
		driver.get("http://www.coopinsurancenz.co.nz/");
		
	    
	}

	@When("^I click Quotes link$")
	public void i_click_Quotes_link() throws Throwable {
		
		//driver.findElement(By.xpath("//*[@id=post-19]/div/div[4]/p[1]/a/img")).click();
	    driver.findElement(By.cssSelector("#post-19 > div > div.one_third.last > p:nth-child(1) > a > img")).click();
	}

	@Then("^I should be in Quotes home page$")
	public void i_should_be_in_Quotes_home_page() throws Throwable {
	   
		WebElement QuoteHeader = driver.findElement(By.id("quoteHeader"));
		
		Assert.assertTrue(QuoteHeader.isDisplayed());
	}



		    
		    }

	
	
