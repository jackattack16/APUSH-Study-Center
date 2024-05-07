const numToEvent = [
      "Columbus sets sail",
"Treaty of tordesilla",
"Spanish start encomienda",
"Transatlantic slave trade starts",
"Roanoke colony",
"Jamestown funding ",
"First slave sold in virgina",
"Mayflower compact",
"Plymouth colony founded",
"New Amsterdam becomes New York",
"Bacon's Rebellion",
"Rueblo Revolt",
"Salem witch trials begin",
"First Great Awakening",
"George Whitefield starts preaching in the colonies",
"First Great Awakening ends",
"Start of seven years war",
"Pontiac's Rebellion",
"Stamp Act is passed",
"Boston tea party",
"Revolutionary war starts at Lexigton and Concord",
"Declaration of Independence ratified",
"Battle of Yorktown takes place",
"Treaty of Paris signed + Revolutionary War ended",
"Shay's Rebellion",
"Constitutional convention",
"Northwest Ordinance ",
"Washington elected first president",
"Second Great Awakening ",
"Bill of Rights ratified",
"Cotton Gin Invented ",
"Whiskey Rebellion",
"Washington's Farewell Address",
"Thomas Jefferson elected President",
"Midnight Judges/Appointments Act",
"Marbury v. Madison - established Judical Review",
"Louisiana Territory purchased",
"12th Amendment ratified (Elector casts distinct votes for VP & Pres)",
"Embargo Act",
"International Slave trade ends (US)",
"War of 1812",
"Federalists hold Hartford Convention",
"Treaty of Ghent ",
"Battle of New Orleans",
"War of 1812 ends",
"Era of good feelings",
"James Monroe elected President",
"Panic of 1819",
"Missouri Compromise",
"Monroe Doctrine",
"Jackson claims Corrupt Bargin",
"American Temperance Society founded",
"Tariff of Abominations passed",
"Andrew Jackson elected President",
"Joseph Smith creates Mormon Church",
"Indian Removal Act ",
"Nat Turner's rebellion",
"William Lloyd Garrison starts publishing The Liberator ",
"Nullification crisis",
"Texas wins independence from Mexico",
"Second Great Awakening ends",
"James K. Polk elected President",
"Texas annexation",
"Mexican-American War",
"Seneca Falls Convention",
"Treaty of Guadalupe Hidalgo + Mexican-American War ends",
"California gold rush",
"Henry Clay's Compromise of 1850",
"Sojourner Truth's \"Ain't I a Woman?\" speech",
"Kansas-Nebraska Act repeals Missouri Compromise",
"Dred Scott v. Sandford upholds slavery",
"Harpers Ferry uprising",
"South Carolina secedes",
"Abraham Lincon elected President",
"Homestead Act passed",
"Pacific railway act passed (32nd parallel is transcontrinental railway)",
"Emancipation Proclamation",
"Battle of Gettysburg",
"Robert E. Lee surrenders",
"Nathan Bedford Forrest becomes first Grand Wizard of the KKK",
"Andrew Johnson impeached",
"14th amendment ratified (naturalized/born citizenship)",
"First Transcontinental railroad completed",
"Knights of Labour Formed",
"15th amendment ratified (gave black men right to vote)",
"Hiram Revels first African-American elected to Senate",
"John D. Rockefeller established Standard Oil",
"Compromise of 1877 (ends reconstruction)",
"Great Railroad Strike of 1877",
"Carlisle Indian School founded",
"James A. Garfield Assassinated",
"Chinese Exclusion act passed",
"American Federation of Labour founded",
"Dawes Act passed",
"Jan Addams opens Hull House",
"Battle of Wounded Knee",
"Sherman Antitrust act passed",
"Plessy v. Furguson legalizes segergation - \"Seperate, but Equal\"",
"William Jennings Bryan's \"Cross of Gold\" speech",
"Hawaii Annexed by the US",
"Spanish-American war",
"William McKinleyn Assassinated with Theodore Roosevelt taking his place",
"Philippine–American War ends",
"US Forest Service created",
"Upton Sinclair publishes The Jungle",
"Pure food and Durg act passed ",
"1st Great Migration ",
"Triangle Shirtwaist Factory Fire",
"Woodrow Willson elected President ",
"Federal Reserve created ",
"World War I starts",
"United states enters World War I",
"18th amendment ratified",
"Treaty of Versailles signed",
"Palmer Raids ",
"Prohibition Begins",
"League of nations created",
"19th amendment ratified (right to vote cannot be denied on basis of sex)",
"Harlem renaissance",
"The Immigration Act of 1924",
"The Great Gatsby published ",
"Herbert Hoover elected President",
"Stock Market crash and the start of the Great Depression",
"Hoover Dam is begins construction",
"Franklin Delano Roosevelt elected President",
"21st amendment ratified - overturns the 18th and ends Prohibition",
"FDR's New Deal begins",
"Hoover Dam opens ",
"World War II begins ",
"2nd Great Migration ",
"Lend-Lease act",
"Pearl Harbor and US entrance to WW2",
"Manhatten Project Begins",
"Zoot suit riots",
"D-Day",
"FDR dies, leaving Harry S. Truman as President",
"WW2 ends ",
"Trinity Test",
"US drops Atomic bombs on Hiroshima and Nagasaki",
"Winston Chruchill's \"Iron Curtain\" speech ",
"Truman Doctrine and the start of the Cold War",
"National Security Council founded",
"Start of the Second Red Scare (McCarthyism)",
"Economic Recovery Act of 1948 (Marshal Plan)",
"US Military desegregated",
"NATO created",
"Soviets test first atomic bomb",
"NSC-68",
"Korean War starts",
"US Hydrogen Bomb tested",
"Dwight D. Eisenhower",
"The Soviet Union announces the death of Josef Stalin",
"Julius and Ethel Rosenburg executed",
"Korean War ends",
"Brown V. Board of Education overturns segregation in public schools",
"Vietnam war starts ",
"Montgomery Bus Boycott ",
"Interstate Highway act passed",
"Suez Crisis",
"Eisenhower Doctrine",
"Soviets launch Sputnik",
"John F. Kennedy elected President",
"Berlin Wall built",
"Cuban Missile Crisis",
"Rachel Carson publishes The Silent Spring",
"Betty Friedan published The Feminine Mystique",
"MLK Jr.'s \"I Have a Dream\" speech",
"JFK's Assassination leads to Lyndon B. Johnson becoming President",
"Civil Rights act passed",
"Gulf of Tonkin passed",
"LBJ's The Great Society",
"Immigration and Nationality Act of 1965",
"Thurgood Marshall becomes first African-American on Supreme Court",
"Tet offensive",
"MLK and RFK assassinated",
"Richard Nixon elected President",
"Nixon's Détente policy ",
"Vietnamization begins",
"Stonewall Riots",
"Apollo 11 lands on the Moon",
"SALT I talks begin ",
"Clean air act",
"Environmental Protection Agency founded ",
"Nixon opens relations with Communist China",
"SALT I talks end",
"Watergate scandal",
"Oil crisis of 1973",
"Roe v. Wade passed",
"Nixon reisigns (only president to do so) and Gerald Ford bcomes President",
"Vietnam war ends ",
"John Adams elected President",
"Jimmy Carter elected President",
"SALT II treaty signed",
"Iran hostage crisis",
"Ronald Reagan elected President + Iran hostages released",
"Economic Recovery Tax",
"Sandra Day O'Connor becomes first woman on Supreme Court",
"Strategic Defense Initiative implemented ",
"Iran-Contra affair",
"Intermediate-Range Nuclear Forces Treaty",
"George H. W. Bush elected President",
"Gulf War starts",
"Gulf War ends",
"Soviet Union dissolves, ending the Cold War",
"Bill Clinton elected president",
"Don't Ask, Don't Tell policy implemented",
"North American Free Trade Effective",
"Defense of marriage act",
"Clinton Impeachment trials",
"Columbine High School massacre",
"George W. Bush elected President ",
"Nine-Eleven",
"Patriot act",
"Patriot act",
"Iraq War begins",
"Hurricane Katrina hits Gulf Coast",
"Great Recession begins",
"Barack Obama elected President",
"Don't Ask, Don't Tell policy repealed",
"Gulf Oil Spill",
"Affordable Care Act (Obama Care)",
"Iraq War ends",
"Supreme Court declares constitutional right to gay marriage",
"Donald Trump elected President",
"COVID-19 Pandemic",
"Joe Biden elected President",
"Janury 6th riots",
"Roe v. Wade overturned",
"2024 Advanced Placement United States History AP Test",
];
let currentCellSelectContent = "";

let list = [];
let numList = [];

let yourOrder = [
      
];
let score = 0;
let lastCellClick = "";
function cellPress(id) {
      if (id.includes("event")) {
            if (lastCellClick !== "") {
                  document.getElementById(lastCellClick).style.background = "white";
            }
            document.getElementById(id).style.background = "#defcff";
            currentCellSelectContent = document.getElementById(id).innerText;
            lastCellClick = id;
      } else {
            document.getElementById(id).innerText = currentCellSelectContent;
            document.getElementById(lastCellClick).style.background = "white";
            currentCellSelectContent = "";
            
      }
      hasUsed();
}

function start() {
      list = [];
      numList = [];
      makeList();
      for (let y = 0; y < 10; y++) {
            var h = y + 1;
            document.getElementById("event" + h).innerText = numToEvent[list[y]-1];
      }
      
}

function makeList() {
      for (let y = 0; y < 10; y++) {
            var h = y + 1;
            document.getElementById("order" + h).innerText = "";
            document.getElementById("order" + h).style.background = "white";
      }
      let place = Math.floor(Math.random() * numToEvent.length);
      for (let x = 0; x < 10; x++) {
            while (list.includes(place+1)) {
                  place = Math.floor(Math.random() * numToEvent.length);
            }
            list.push(place+1);
            numList.push(Number(place+1));
            place = Math.floor(Math.random() * numToEvent.length);
      }
      numList.sort((a, b) => a - b);
}

function check() {
      score = 0;
      yourOrder = [];
      for (let y = 0; y < 10; y++) {
            var h = y + 1;
            let text = document.getElementById("order" + h).innerText;
            if (numToEvent.indexOf(text) == -1) {
                  yourOrder.push("");
            } else {
                  yourOrder.push(numToEvent.indexOf(text)+1);
            }
         
      }
      let gPlus = 1;
      for (let g = 0; g < 10; g++) {
            let curCell = document.getElementById("order" + gPlus)
            if (yourOrder[g] == numList[g]) {
                  score++;
                  curCell.style.background = "#3CE66C";
            } else {
                  
                  let urAss = curCell.innerText;
                  if (urAss.includes("You said:")) {
                    curCell.style.background = "#E63C3C";
                  } else {
                    curCell.style.background = "#E63C3C";
                  if (document.getElementById("checkBox").checked) {
                  let newContent = "You said: " + urAss + "<b>" + "  Correct Answer: " + numToEvent[numList[g]-1] + "." + "<b/>";
                  curCell.innerHTML = newContent;
                  }
                    
                  
                  }
                  
            }
           gPlus++;
}

if(score == 1) {
       alert("You scored " + score + " point!");
} else {
      alert("You scored " + score + " points!");
}

}

function hasUsed() {
  let yourOrder = [];
  for(let l = 1; l < 11; l++) {
    document.getElementById("event" + l).style.fontWeight = "normal";
  }
  for (let y = 0; y < 10; y++) {
            var h = y + 1;
            let text = document.getElementById("order" + h).innerText;
            if (numToEvent.indexOf(text) != -1) {
                  let id = list.indexOf(numToEvent.indexOf(text)+1)+1;
                  document.getElementById("event" + id).style.fontWeight = "bold";
            } else {
                  yourOrder.push(text);
            }
         
      }
}