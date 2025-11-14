module.exports = (srv) => {
  const { EmployeeSet } = srv.entities;

  srv.before('CREATE', EmployeeSet, (req) => {
    const { salaryAmount, currency } = req.data;
    if (!(salaryAmount < 50000 && currency === 'USD')) {
      req.error(400, "Employees salary must be less than 50000 USD.");
    }
  });

  srv.after('CREATE', EmployeeSet, () => {
    console.log("Create operation successful");
  });


  srv.before('UPDATE', EmployeeSet, async (req) => {
    const { salaryAmount, currency, nameFirst, loginName } = req.data;

    if (salaryAmount !== undefined && currency !== undefined) {
      if (!(salaryAmount < 50000 && currency === 'USD')) {
        req.error(400, "Employees salary must be less than 50000 USD.");
      }
    }
    const old = await SELECT.one.from(EmployeeSet).where({ ID: req.data.ID });
    if (old) {
      if (nameFirst && nameFirst !== old.nameFirst)
        req.error(400, "Operation not allowed.");
      if (loginName && loginName !== old.loginName)
        req.error(400, "Operation not allowed.");
    }
  });

  srv.after('UPDATE', EmployeeSet, () => {
    console.log("Update operation successful");
  });
srv.before('DELETE', EmployeeSet, async (req) => {
    const emp = await SELECT.one.from(EmployeeSet).where(req.data);
    if (emp && emp.nameFirst.startsWith('S')) {
      req.error(400, "Delete not allowed: Employee name starts with 'S'.");
    }
  });

  srv.after('DELETE', EmployeeSet, () => {
    console.log("Delete operation successful");
  });
};
