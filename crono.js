const numToEvent = [
      "Columbus sets sail",
"Treaty of tordesilla",
"Spanish Conquistador Hernando de Soto lands in Florida",
"Spanish start encomienda",
"Transatlantic slave trade starts",
"Roanoke colony",
"Jamestown founded",
"First slave sold in Jamestown",
"Mayflower compact",
"Plymouth colony founded",
"New Netherland established",
"Jamestown Massacre",
"Massachusetts Bay Colony",
"Pequot War",
"New Amsterdam becomes New York",
"King Philip’s War",
"Bacon's Rebellion",
"Rueblo Revolt",
"Pennsylvania colony founded by William Penn",
"Salem witch trials begin",
"~25,000 enslaved people",
"First Great Awakening",
"Stony Rebellion aka Cato Rebellion",
"George Whitefield starts preaching in the colonies",
"First Great Awakening ends",
"Start of seven years war (French and Indian war)",
"Pontiac's Rebellion",
"Treaty of Paris (French and indian war edition) ",
"Stamp Act is passed",
"Boston tea party",
"Continental Congress founded",
"Revolutionary war starts at Lexigton and Concord",
"Lord Dunmore's Proclamation ",
"Common Sense by Thomas Paine published ",
"Declaration of Independence ratified",
"Battles of Saratoga",
"Pennsylvania abolishes slavery",
"Articles of Confederation come into effect",
"Battle of Yorktown takes place",
"Treaty of Paris signed + Revolutionary War ended",
"Massachusetts abolishes slavery",
"Shay's Rebellion",
"Constitutional convention",
"Northwest Ordinance ",
"Constitution ratified",
"Washington elected first president",
"~700,000 enslaved people",
"Second Great Awakening ",
"Hatian revolution begins",
"Bill of Rights ratified",
"Cotton Gin Invented ",
"Whiskey Rebellion",
"Washington's Farewell Address",
"Gabriels rebellion",
"Thomas Jefferson elected President",
"Midnight Judges/Appointments Act",
"Marbury v. Madison - established Judical Review",
"Louisiana Territory purchased",
"Hatian revolution ends",
"Lewis and Clark expedition begins",
"12th Amendment ratified (Elector casts distinct votes for VP & Pres)",
"Lewis and Clark expedition ends",
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
"Trail of Tears starts",
"Nat Turner's rebellion",
"William Lloyd Garrison starts publishing The Liberator ",
"Nullification crisis",
"Texas wins independence from Mexico",
"Calhoun \"Positive Good\" ",
"Orgen trail begins use",
"Second Great Awakening ends",
"James K. Polk elected President",
"Texas annexation",
"Mexican-American War",
"Seneca Falls Convention",
"Treaty of Guadalupe Hidalgo + Mexican-American War ends",
"California gold rush",
"Trail of Tears ends",
"Henry Clay's Compromise of 1850",
"Sojourner Truth's \"Ain't I a Woman?\" speech",
"Ostend Manifesto",
"Uncle Toms Cabin published",
"Kansas-Nebraska Act repeals Missouri Compromise",
"Dred Scott v. Sandford upholds slavery",
"Harpers Ferry uprising",
"South Carolina secedes",
"Abraham Lincon elected President",
"Confiscations Acts",
"Homestead Act passed",
"Pacific railway act passed (32nd parallel is transcontrinental railway)",
"Emancipation Proclamation",
"Battle of Gettysburg",
"13th amendment ratified (Abolishes slavery)",
"Robert E. Lee surrenders",
"Nathan Bedford Forrest becomes first Grand Wizard of the KKK",
"Andrew Johnson impeached",
"14th amendment ratified (naturalized/born citizenship)",
"First Transcontinental railroad completed",
"Knights of Labour Formed",
"15th amendment ratified (gave black men right to vote)",
"Hiram Revels first African-American elected to Senate",
"John D. Rockefeller established Standard Oil",
"Battle of the Little Bighorn",
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
"Roosevelt Corollary to Monroe Doctrine",
"US Forest Service created",
"Upton Sinclair publishes The Jungle",
"Pure food and Durg act passed ",
"Founding of the NAACP ( National Association for the Advancement of Colored People)",
"1st Great Migration ",
"Triangle Shirtwaist Factory Fire",
"Woodrow Willson elected President ",
"Federal Reserve created ",
"Woodrow Willson segregates the governemnt",
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
"Of Mice and Men published ",
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
"US Military desegregated via executive order from President Truman",
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
"Southern Christian Leadership Conference",
"Little Rock Nine",
"Soviets launch Sputnik",
"John F. Kennedy elected President",
"Berlin Wall built",
"Cuban Missile Crisis",
"Rachel Carson publishes The Silent Spring",
"Betty Friedan published The Feminine Mystique",
"MLK Jr.'s \"I Have a Dream\" speech + March on Washington",
"JFK's Assassination leads to Lyndon B. Johnson becoming President",
"Civil Rights act passed",
"Gulf of Tonkin passed",
"LBJ's The Great Society",
"Selma March",
"Voting Rights Act of 1965",
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
"2024 Advanced Placement United States History AP Test"
];
let date  = [
  "1492",
"1494",
"1539",
"1512",
"1525",
"1585",
"1607",
"1619",
"1620",
"1620",
"1621",
"1622",
"1628",
"1636",
"1664",
"1675",
"1676",
"1680",
"1681",
"1692",
"1700",
"1730",
"1739",
"1740",
"1740",
"1754",
"1763",
"1763",
"1765",
"1773",
"1774",
"1775",
"1775",
"1776",
"1776",
"1777",
"1780",
"1781",
"1781",
"1783",
"1783",
"1786",
"1787",
"1787",
"1789",
"1789",
"1790",
"1790",
"1791",
"1791",
"1793",
"1794",
"1796",
"1800",
"1800",
"1801",
"1803",
"1803",
"1804",
"1804",
"1804",
"1806",
"1807",
"1808",
"1812",
"1814",
"1814",
"1815",
"1815",
"1815",
"1816",
"1819",
"1820",
"1823",
"1824",
"1826",
"1828",
"1828",
"1830",
"1830",
"1831",
"1831",
"1831",
"1832",
"1836",
"1837",
"1839",
"1840",
"1844",
"1845",
"1846",
"1848",
"1848",
"1849",
"1850",
"1850",
"1851",
"1852",
"1852",
"1854",
"1857",
"1859",
"1860",
"1860",
"1861",
"1862",
"1862",
"1863",
"1863",
"1856",
"1865",
"1867",
"1868",
"1868",
"1869",
"1869",
"1870",
"1870",
"1870",
"1876",
"1877",
"1877",
"1879",
"1881",
"1882",
"1886",
"1887",
"1889",
"1890",
"1890",
"1896",
"1896",
"1898",
"1898",
"1901",
"1902",
"1904",
"1905",
"1906",
"1906",
"1908",
"1910",
"1911",
"1912",
"1913",
"1913",
"1914",
"1917",
"1919",
"1919",
"1919",
"1920",
"1920",
"1920",
"1920",
"1924",
"1925",
"1928",
"1929",
"1931",
"1932",
"1933",
"1933",
"1936",
"1937",
"1939",
"1940",
"1941",
"1941",
"1942",
"1943",
"1944",
"1945",
"1945",
"1945",
"1945",
"1946",
"1947",
"1947",
"1947",
"1948",
"1948",
"1949",
"1949",
"1950",
"1950",
"1952",
"1953",
"1953",
"1953",
"1953",
"1954",
"1955",
"1955",
"1956",
"1956",
"1957",
"1957",
"1957",
"1957",
"1960",
"1961",
"1962",
"1962",
"1963",
"1963",
"1963",
"1964",
"1964",
"1964",
"1965",
"1965",
"1965",
"1967",
"1968",
"1968",
"1968",
"1969",
"1969",
"1969",
"1969",
"1969",
"1970",
"1970",
"1972",
"1972",
"1972",
"1973",
"1973",
"1974",
"1975",
"1976",
"1978",
"1979",
"1979",
"1980",
"1981",
"1981",
"1983",
"1985",
"1987",
"1988",
"1990",
"1991",
"1991",
"1992",
"1993",
"1994",
"1996",
"1998",
"1999",
"2000",
"2001",
"2001",
"2003",
"2005",
"2007",
"2008",
"2010",
"2010",
"2010",
"2011",
"2015",
"2016",
"2019",
"2020",
"2021",
"2022",
"2024"
];
let currentCellSelectContent = "";

let list = [];
let numList = [];
let dateList = [];
let yourOrder = new Array(10);
let score = 0;
let lastCellClick = "";
let firstDate = "";
let lastDate = "";
let hintsUsed = 0;
function cellPress(id) {
  let place = id.match(/\d+/g);
      if (id.includes("event")) {
            if (lastCellClick !== "") {
                  document.getElementById(lastCellClick).style.background = "white";
            }
            document.getElementById(id).style.background = "#defcff";
            currentCellSelectContent = numToEvent[list[place-1]-1];
            lastCellClick = id;
      } else {
            document.getElementById(id).innerText = currentCellSelectContent;
            yourOrder[place-1] = currentCellSelectContent;
            document.getElementById(lastCellClick).style.background = "white";
            currentCellSelectContent = "";
      }
      hasUsed();
      //alert(yourOrder);
}

function start() {
      list = [];
      numList = [];
      makeList();
      currentCellSelectContent = "";
      for (let y = 0; y < 10; y++) {
            var h = y + 1;
            document.getElementById("event" + h).innerText = numToEvent[list[y]-1];
            document.getElementById("event" + h).style.background = "white";
      }
      hasUsed();
      document.getElementById("displayDateArea").innerHTML = "Click for hint!";
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
            console.log(numToEvent[Number(place+1)] + " + " + date[Number(place+1)]);
            dateList.push(date[Number(place)]);
            place = Math.floor(Math.random() * numToEvent.length);
      }
      numList.sort((a, b) => a - b);
      lastDate = Math.max(...dateList);
      firstDate = Math.min(...dateList);
}

function check() {
  score = 0;
  let yourOrderInNumber = new Array(10);
  for(let i = 0; i < 10; i++) {
    yourOrderInNumber[i] = numToEvent.indexOf(yourOrder[i])+1;
  }
  let multilatiableArray = [...list];
  let correctOrder = multilatiableArray.sort((a, b) => a - b);
  for(let c = 0; c < 10; c++) {
    let curCell = document.getElementById('order' + (c+1));
    if (yourOrderInNumber[c] == correctOrder[c]) {
                  score++;
                  curCell.style.background = "#3CE66C";
            } else {
                  
                  let urAss = curCell.innerText;
                  if (urAss.includes("You said:")) {
                    curCell.style.background = "#E63C3C";
                  } else {
                    curCell.style.background = "#E63C3C";
                  if (true) {
                  let newContent = "You said: " + urAss + "<b>" + "  Correct Answer: " + numToEvent[correctOrder[c]-1] + "." + "<b/>";
                  curCell.innerHTML = newContent;
                  }
                    
                  
                  }
  }
}
alert("You scored " + score + " points!");
}
function hasUsed() {
  //let yourOrder = [];
  for(let l = 1; l < 11; l++) {
    document.getElementById("event" + l).style.fontWeight = "normal";
  }
  for (let y = 0; y < 10; y++) {
    //alert('event' + y);
    let cellName = 'event' + (y+1);
    //alert(cellName);
    let cell = numToEvent[list[y]-1];
    if(yourOrder.includes(cell)) {
      document.getElementById(cellName).style.fontWeight = 'bold';
    }
      }
}

function hint() {
  if(hintsUsed === 0) {
  let text = "Date Range: ";
  text += firstDate + " - " + lastDate + "\n" + "Click agian to get the date of a term!" ;
  document.getElementById("displayDateArea").innerText = text;
  hintsUsed++;
  } else if(hintsUsed < 11) {
    let dateForTerm = date[numToEvent.indexOf(numToEvent[list[hintsUsed-1]-1])];
    let dateText = " - " + dateForTerm;
    document.getElementById('event' + hintsUsed).innerText += dateText;
    hintsUsed++;
  }
}

document.addEventListener('keydown', function(event) {
            // Check if the pressed key is a number
            if (event.keyCode >= 48 && event.keyCode <= 57) {
                let numberPressed = event.key;
                if(numberPressed == 0) {
                  numberPressed = 10;
                }
                cellPress('order' + numberPressed);
            }
        });
