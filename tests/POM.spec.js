import {test , expect} from '@playwright/test';
import { LoginPage } from    '../node_modules/Pages/LoginPage';
import { HomePage } from    '../node_modules/Pages/HomePage';
import { PatientHistory } from '../node_modules/Pages/PatientHistory';



test('test', async ({ page }) => {

// Login
const login = new LoginPage(page);
 await login.GoToLoginPage();
 await login.Login('John Doe', 'ThisIsNotAPassword');
 await login.LoginValidation();
 
 //await page.waitForTimeout(5000);

 //Homepage

const HomeAppointment = new HomePage(page);
 await HomeAppointment.MakeAppointment();
 await HomeAppointment.AppointmentValidation();


 //Patient History

const History = new PatientHistory(page);
await History.HistoryPageAction();


})