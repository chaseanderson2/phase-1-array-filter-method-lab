function findMatching(drivers, string) {
    const lowercaseString = string.toLowerCase();
    const matchingDrivers = drivers.filter(driver =>
      driver.toLowerCase() === lowercaseString
    );
    return matchingDrivers;
  }

function fuzzyMatch(drivers, string) {
    const lowercaseString = string.toLowerCase();
    const matchingDrivers = drivers.filter(driver =>
      driver.toLowerCase().startsWith(lowercaseString)
    );
    return matchingDrivers;
  }

  function matchName(drivers, string) {
    const matchingDrivers = drivers.filter(driver =>
      driver.name === string
    );
    return matchingDrivers;
  }
