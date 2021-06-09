// editorconfig-checker-disable
export const GlossaryData = [
  {
    name: 'Amortization Period',
    description:
      'The Amortization Period tells you how fast a loan is expected to be paid down. When you "amortize" a loan, you pay it down gradually in regular installments. More time = more, smaller payments. If the loan terms specify a 30 year amortization, it would take 30 years to pay off the loan completely in "gradual" installments.',
    howToCalculate:
      'Amortization per Month = Total Monthly Payment - Principal Payment * Interest Rate',
    example:
      'A property is purchased for $3M with a $2M loan and $1M in equity. The loan has a 30 yr amortization period at a fixed interest rate of 3%, and the owner is paying $8,433 in equal monthly payments for 30 years. In month 1, the interest payment is $2M * 3% / 12 = $5,000. Therefore, the amortization for Month 1 is $8,433 - $5,000 = $3,433. By month 6, the interest payment is $1.98M * 3% / 12 = $4957, making the amortization for that month $3,475.',
    note: '',
  },
  {
    name: 'Annual Return on Investment',
  },
  {
    name: 'Appreciation',
    description:
      'Appreciation is the rise in value of a real estate asset, which typically occurs due to growth of surrounding market, property upgrades and/or price inflation. In real estate, you can realize the appreciation through a refinancing/construction earn-out or through the sale of the property (or your position).',
    howToCalculate:
      'Appreciation = Current Valuation - Original Valuation',
    example:
      'A property was purchased in 2015 for $1M. In 2021, the estimated market value is $1.5M. This property is said to have appreciated $0.5M ($500,000).',
    note:
      'Cap rate (or income-based) is the most common valuation method used in real estate investing, making it easy to compare the relative value of one property to another. ',
  },
  {
    name: 'Average Cash Distribution',
    description:
      'Cash on Cash Return is a simple calculation used to evaluate how much cash you&#39;re making relative to how much cash you put in. Specifically, it looks at the total cash distributed (from all sources: rental income, construction earn-outs, sale, refinancing) over the total cash invested.',
    howToCalculate:
      'Cash on Cash Return = Net Cash Flow / Total Cash Invested',
    example: '',
    note:
      'This metric takes into consideration the value of the leverage, but not some of the other benefits of rental property ownership (e.g. unrealized appreciation and tax benefits).',
  },
  {
    name: 'Average Time Invested',
    description:
      'Average Time Invested tells you the average amount of time each dollar has been invested. When there are multiple deposits and distributions made over time, it can be difficult to contextualize return numbers. This metric helps address any potential distorting effect.',
    howToCalculate:
      'Average Time Invested = (Investment 1*Months Invested + Investment 2*Months Invested 2) /  (Investment 1 + Investment 2)',
    example:
      'An investor who bought 10 shares of a property ($50K) 12 months ago, and and 5 shares of another property ($25k) 6 month ago will have an average time invested of 10 months.',
    note: '',
  },
  {
    name: 'Cap Rate',
    description:
      `Capitalization Rate (Cap Rate) is a property’s rate of return based on income.
      It can be thought of like the interest rate on a bond. The cap rate fluctuates as people buy and sell assets. \n
      The income-based valuation, which relies on cap rate, is the most common method used for multifamily properties.`,
    howToCalculate:
      'Cap Rate = Net Operating Income / Market Value of Property',
    example:
      'The cap rate of a property with $100k in NOI and a market value of $2M would be 5% (or 5 cap).',
    note:
      'Cap rate (or income-based) is the most common valuation method used in real estate investing, making it easy to compare the relative value of one property to another. ',
  },
  {
    name: 'Capex Reserve',
    description:
      'The Capex Reserve is funds set aside for capital expenditure (renovations and repairs that extend or improve the useful life of your property). This includes both budgeted renovation costs to improve the property, and ongoing maintenance and repairs that we anticipate and plan for over the course of ownership.',
    howToCalculate:
      'Capex Reserve = Budgeted Renovations + Maintenance/ Repair Reserve',
    example:
      'A $3M property has a renovations budget of $250,000 (upgrading units, updating floor plans) as well as a maintenance and repair reserve (to cover replacement costs for items like heating, ventilation, and air conditioning (HVAC) systems, parking lot resurfacing, etc that may "wear out") of $50,000. The total Capex Reserve is $300,000 ',
    note:
      'Cap rate (or income-based) is the most common valuation method used in real estate investing, making it easy to compare the relative value of one property to another. ',
  },
  {
    name: 'Capital gains',
    description:
      'Capital Gains are any increase in the value of an equity investment that exceeds the purchase price of the equity. The IRS taxes capital gains at a lower rate than income. Long-term capital gains usually refer to a holding period of longer than 1 year.',
  },
  {
    name: 'Cash Out Refinancing',
    description:
      'A Cash Out Refinancing is a type of refinancing (replacing an existing loan with a new loan that pays off the debt of the first one) in which one borrows more money than they currently owe, and gets the difference between the two loan amounts in cash.',
    howToCalculate:
      'Cash Out post Refinancing = New Loan Amount - Initial Loan Amount',
    example:
      'A property was purchased in 2015 for $3M with a loan of $2M. In 2020, the owner(s) refinanced their mortgage at a property valuation of $4.5M. They maintained the same loan to value ratio as the initial loan, making the new loan $3M. At the closing of the new loan, the owner(s) receive a check for $1M (the difference between the new loan and the initial loan).  Note: the terms of the loan (e.g. interest rate, amortization) may or may not be the same.', 
    note:
      'Coral typically refinances when the property value has meaningfully increased, borrowing more money while maintaining the same loan to value ratio.'
  },
  {
    name: 'Closing Costs',
    description:
      `Closing Costs, typical of any real estate transaction, include items such as appraisals and inspections,
      title search/insurance, taxes and recording fees, loan origination fees, etc. \n
      These vary per city/state, but typically amount to 1 percent of the purchase price.`,
    howToCalculate: 'n/a',
    example:
      'A property was purchased in 2015 for $3M with a loan of $2M. In 2020, the owner(s) refinanced their mortgage at a property valuation of $4.5M. They maintained the same loan to value ratio as the initial loan, making the new loan $3M. At the closing of the new loan, the owner(s) receive a check for $1M (the difference between the new loan and the initial loan).  Note: the terms of the loan (e.g. interest rate, amortization) may or may not be the same.',
    note:
      'Coral typically refinances when the property value has meaningfully increased, borrowing more money while maintaining the same loan to value ratio.',
  },
  {
    name: 'Construction Earn Out ',
    description:
      'A Construction Earn Out is an agreement that allows the borrower to receive additional funds from the lender upon completion of construction/renovations. It is similar to a refinance but would have been pre-arranged in the original mortgage agreement (and does not involve replacing one loan with another).',
    howToCalculate: 'n/a',
    example:
      'A property is being purchased for $3M with plans to to renovate the property to increase property value. The bank agrees to lend a total of $2.5M, providing $2M upfront to finance the purchase of the property, and an incremental $500k (cost of renovations) once the construction is complete. The $500k is the Construction Earn Out, and the amount can be based on the actual costs of construction or the perceived value of the improvements.',
    note:
      'Coral typically refinances when the property value has meaningfully increased, borrowing more money while maintaining the same loan to value ratio.',
  },
  {
    name: 'Depreciation',
    description:
      'Depreciation is an income tax deduction (a non-cash expense) based on the perceived decrease in the value of the real estate. US Generally Accepted Accounting Principles (GAAP) allows rental property owners to deduct the costs buying and improving a rental property over the property&#39;s &#34;useful life,&#34; which the IRS has prescribed as 27.5 years for residential rental properties. This lowers owner&#39;s taxable income in the process. Note: Land is not subject to depreciation.',
    howToCalculate:
      `Annual Amount of Depreciation = (Cost Basis + Capex - Realistic Land Value) / 27.5 \n
      Where: \n
      Cost Basis = the original value or purchase price of the property`,
    example:
      'A multifamily property is purchased for $3.25M (including closing costs). This is the cost basis of the property. Additionally, the new owner(s) invest $500k in renovations (capex). The land value is $1M. The annual amount of depreciation the owners can recognize is now $100K, based on: (3.75M+.5M-1M)/27.5.',
    note: '',
  },
  {
    name: 'Equity',
    description:
      'Equity is ownership of an asset (e.g. an investment property) that may have debts or other liabilities attached to it. Equity is calculated by subtracting any liabilities (amount of money you owe on the loan) from the fair market value of your ownership position.',
    howToCalculate:
      `Equity = Fair Market Value of Property - Liabilities \n
      OR \n
      Equity = Original investment + Loan Principal Reduction + Appreciation`,
    example:
      'A property is purchased for $3M with a $2M loan and $1M in equity. 10 years later, the property has appreciated $1M, making the fair market value $4M. The loan principal has been reduced by $.5M in principal payments. Through this combination of $1M in appreciation and $.5M in loan principal reduction, the equity is now $2.5M (up from $1M).',
    note:
      'As the second formula suggests, an owner (equity holder) "builds-up" equity over time as they pay down the principal of the loan. This is the loan principal reduction.',
  },
  {
    name: 'Gross Rental Income',
    description:
      'Gross Rental Income is the total rent collected before any expenses or mortgage payment. This is often equal to total revenue in a rental property (unless the property has other sources of revenue, like coin-operated laundry).',
    howToCalculate:
      'Gross Rental Income = Total Rent Collected',
    example:
      'A fully occupied property has 3 units that each rent at $3K monthly. The monthly Gross Rental Income is $9K, and annual Gross Rental Income is $108K.',
    note: '',
  },
  {
    name: 'Gross Rental Yield',
    description:
      'Gross Rental Yield provides a rough estimation of the income-producing ability for an asset, before considering expenses or leverage. Gross yields can go up and down from one year to the next (or even within the same year).',
    howToCalculate:
      'Gross Rental Yield = Annual Gross Rental Income / Purchase Price',
    example:
      'A property has 3 units that each rent at $3K monthly, providing an annual Gross Rental Income of $108k. The property was purchased for $1.35M, making the Gross Rental Yield 8%.',
    note: '',
  },
  {
    name: 'Interest Rate',
    description:
      'The Interest Rate is the rate of interest on your loan amount: how much money the lender will charge you each year to borrow the money, expressed as a percentage of the loan. This “pricing” of the loan can either be fixed or floating (quoted as a spread over an index).',
    howToCalculate: 'n/a',
    example: '',
    note: '',
  },
  {
    name: 'IRR',
    description:
      'IRR is a measure of annualized net return on an equity investment, used to evaluate the profitability of an investment over its lifetime. It takes a comprehensive view of gains (rent income and appreciation) and uses the Time Value of Money concept (the core assumption that money is worth more the sooner you receive it) by applying a discount rate on a compounding basis. For this reason, it&#39; s a more complex calculation.',
    howToCalculate: '(see pic on page)',
    example:
      'Assuming a 100k investment and holding period is 5 years. The investment returns 10k from year 1 to 4 and 10k + the original 100k in year 5. Then the IRR of the property is the rate of return based on such a cash flow. In this example, it will be 10%. If the year 5 return is 50k + the original principal, the IRR will be 15.84%',
    note: '',
  },
  {
    name: 'Loan Term',
    description:
      'The Loan Term refers to how long you can keep the money until it is owed back to the lender. In commercial mortgages, unlike residential mortgages, this is usually a different length of time than how long it takes to fully pay off the loan (see “Amortization”).',
    howToCalculate: 'n/a',
    example:
      'A property is financed with a loan that has as loan term of 5 years. Once the 5 years are up, the property will need to pay back the balance of the loan. This can be done using cash on hand, or cash obtained through refinancing or selling the property).',
    note: '',
  },
  {
    name: 'Loan to Value (LTV) Ratio',
    description:
      'Loan to Value tells you the ratio between the amount borrowed and the value of the property. It is used as an assessment of lending risk. Higher LTV ratios are generally considered higher risk loans, and may have a higher interest rate. Typically, at purchase, banks will lend based on the Appraised value or Purchase Price (whichever is lower).',
    howToCalculate: 
      `LTV = Amount Borrowed / Value of Property \n
      Where: \n
      Value of Property can be defined as Appraised Value or Purchase Price.`,
    example:
      `The LTV is 65% for a property with an appraised value of $1,000,000 that is purchased with $650,000 debt (a loan) and $350,000 equity. \n
      At purchase, the purchase price of a property was $1,300,000 and the appraised value $1,000,000. The bank used the lower amount, the appraised value, as the property value to define the loan amount.`,
    note:
      'Coral typically obtains loans at an LTV of around 65%.',
  },
  {
    name: 'Net Asset Value',
    description:
      'Net Asset Value is used to measure the value of an asset at a specific point in time. Within real estate, NAV is designed to help property owners track changes in the value of their property from its initial purchase price. It may be referred to as &#34;marked value,&#34; and is often used interchangeably with Equity.',
    howToCalculate:
      `There is no universal way for calculating NAV, but at Coral we use the following definition: \n
      Net Asset Value = Total Assets - Total Liabilities`,
    example:
      '',
    note: '',
  },
  {
    name: 'Net Operating Income',
    description:
      `Net Operating Income (NOI) is the annual income generated from a property (e.g. rent) less operating expenses (costs incurred to maintain and run a property,
        e.g. real estate taxes, pest control, insurance, property management fees). \n
      NOI focuses on an income-producing asset's basic profitability, and does not take into account capital expenditure, depreciation, or loan interest/principal payments. It is the EBITDA of real estate.`,
    howToCalculate:
      `NOI = Annual Income from Operations - Annual Operating Expenses \n
      — \n
      Where: \n
      Annual Income = Gross Rental Income + Any Incremental Income`,
    example:
      'A property generates $100K in annual income (including gross rental income and income from coin-operated laundry). The property&#39;s annual operating expenses total $50,000 (property management, snow removal, pest control, property taxes, and more). The property&#39;s NOI is $50K.',
    note: '',
  },
  {
    name: 'Net Rental Yield',
    description: '',
    howToCalculate: '',
    example: '',
    note: '',
  },
  {
    name: 'Principal Loan Amount',
    description:
      'The Principal Loan Amount is the amount of money being borrowed from a lender (in our case, a bank).',
    howToCalculate: 'n/a',
    example:
      'A multifamily property is purchased for $4.6M with a $3M loan and $1.6 in equity. The principal loan amount is $3M.',
    note: '',
  },
  {
    name: 'Principal Paydown',
    description:
      'Principal Paydown refers to paying down the principal of the loan, thereby reducing the principal loan balance. As you make principal repayments over the lifetime of a loan, these payments are converted to equity and can be recouped later. This is often referred to as "equity buildup." When you sell the property or refinance, your proceeds will be higher. It is the total amount that the loan has amortized to date.',
    howToCalculate: '',
    example:
      'A multifamily property is purchased for $4.6M with a $3M loan and $1.6 in equity. The loan has a 30 yr amortization period, so the owners are paying down $100k in principal payments each year. After 5 years, the owners have paid down $500k of their loan. Now, they have $2.1M in equity and $2.5M in debt (loan balance).',
    note: '',
  },
  {
    name: 'Return on Equity (ROE)',
    description:
      `Return on Equity is used to calculate how effectively assets are being used to generate profit, taking into account the total gain (cash flow, appreciation, etc.) as a percentage of the total equity (net amount of cash received if property were sold). Real estate investors often use return on equity to determine if they should sell or refinance an investment property. \n
       Note: your equity changes as you pay down your mortgage, benefit from general appreciation from the market or force appreciation through improvements.`,
    howToCalculate:
      `ROE = Total Annual Return / Equity \n
      — \n
      Where: \n
      Total Annual Return = Cash Flow + Principal Paydown + Appreciation) \n
      Equity = Original Investment + Loan Principal Reduction + Appreciation
      `,
    example:
      'The Total Annual Return for a property generating an an annual NOI of $5k, 3% annual appreciation ($XX), and with a loan principal reduction (through principal payments) of $XX in that year will be $XX. With XX',
    note: '',
  },
  {
    name: 'Share Price',
    description:
      'The Share Price is the amount of money required to purchase a single share of ownership (1%) in a Coral property. This amount is equal to 1/100th of the Equity of the property.',
    howToCalculate: '',
    example:
      'The Total Property Costs of a new Coral property are $3M. The property is purchased (financed) with a $2M loan and $1M in equity. The share price is $10,000 or 1/100th of $1M.',
    note: '',
  },
  {
    name: 'Total Property Costs',
    description:
      'The Total Property Costs is the total amount of money (capital) to buy and own the property through Coral, including improvements. This sum includes the purchase price of the property, closing costs, acquisition fee and budgeted capital expenditure (renovations and a reserve for ongoing maintenance and repairs). It is also equal to Equity + Loan',
    howToCalculate: '',
    example: '',
    note: '',
  },
];
