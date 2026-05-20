"use client";
import { useState } from "react";
import { trackEvent } from "@/lib/gtag";

const BOAT_RAFFLE_RULES = `SPONSOR

The boat raffle is sponsored by Chasing a Cure Parkinson's Foundation, an Indiana nonprofit organization and federally recognized 501(c)(3) public charity, EIN 82-5107944. Net proceeds support its charitable mission of funding the science behind breakthroughs for Parkinson's disease through Team Fox and The Michael J. Fox Foundation. Chasing a Cure Parkinson's Foundation is 100 percent volunteer run and pays no salaries. Net proceeds help fund Parkinson's research after allowable raffle and event expenses.

LICENSE AND COMPLIANCE

Indiana Single Activity License Number: 018323. Indiana Gaming Commission Reference Number: 164990. Raffle Sales Open Date: May 8, 2026. Drawing Date: July 18, 2026. Licensed Activity Window: July 18, 2026, 2:00 PM to 7:00 PM Eastern Time. This raffle is subject to all applicable Indiana charity gaming laws, license conditions, electronic raffle requirements, Rafflebox requirements, Indiana Department of Revenue rules, Indiana BMV requirements, IRS rules, and any dealer, title, registration, tax, or transfer requirements. If these Official Rules conflict with applicable law, regulator direction, license conditions, or platform requirements, those requirements control.

PRIZE SPONSOR AND DEALER ACKNOWLEDGMENT

The boat raffle prize is made possible by Indy Boat Co., our Title Sponsor. Chasing a Cure Parkinson's Foundation is deeply grateful to Indy Boat Co. for helping make this raffle possible. This acknowledgment does not represent or guarantee a specific donation, purchase, sponsorship, title, ownership, tax, or transfer structure. The final prize structure may be documented through a sponsorship agreement, donation agreement, conditional prize purchase agreement, prize fulfillment agreement, dealer transfer process, or another written arrangement approved by Chasing a Cure Parkinson's Foundation and its professional advisors. Any reference to Indy Boat Co. is for sponsor, dealer, prize fulfillment, prize transfer, or acknowledgment purposes only. Indy Boat Co. is not responsible for raffle ticket sales, raffle administration, winner selection, tax reporting by the foundation, raffle platform operation, or regulatory compliance unless separately required by written agreement or applicable law.

RULES CONTROL

These Official Rules control the raffle. Promotional language, social media posts, flyers, emails, text messages, sponsor acknowledgments, verbal statements, informal communications, and Rafflebox summaries are for convenience only and do not modify these Official Rules. No oral statement, text message, email, flyer, social media post, sponsor acknowledgment, promotional statement, or informal communication may modify these Official Rules unless the modification is made in writing by Chasing a Cure Parkinson's Foundation and permitted by applicable law, Rafflebox, and the Indiana Gaming Commission.

HOUSE RULES POSTING AND AVAILABILITY

Final Official Rules for the raffle will be published before public promotion begins, made available upon request, and available at the event. Chasing a Cure Parkinson's Foundation will follow the final posted rules once established.

ELIGIBILITY

Purchasers must be at least 18 years of age and must reside in Indiana or be physically located in Indiana at the time of ticket purchase. Void where prohibited or restricted by law. Chasing a Cure Parkinson's Foundation reserves the right to verify eligibility before awarding the prize. A ticket purchase by an ineligible person is void and does not create a right to receive the prize. To protect the integrity of the boat raffle, the following persons are not eligible to purchase tickets or win: anyone serving on the Chasing a Cure Parkinson's Foundation board; any officer, employee, contractor, volunteer, raffle committee member, event host, agent, or representative of Chasing a Cure Parkinson's Foundation who is directly or materially involved in raffle planning, promotion, administration, ticket sales, drawing, winner verification, prize transfer, financial reconciliation, compliance, or oversight; anyone working for Indy Boat Co., including owners, officers, employees, contractors, agents, and representatives; Rafflebox personnel involved in administration, operation, drawing, verification, or support of the raffle; and immediate family members or household members of any person listed above. Immediate family includes spouse, domestic partner, parent, child, sibling, grandparent, grandchild, in-law, or any person living in the same household, whether or not related. Chasing a Cure Parkinson's Foundation may disqualify any person if participation would create an actual conflict of interest, perceived conflict of interest, violation of law, violation of license requirements, violation of platform requirements, or risk to the integrity of the raffle.

TICKET PURCHASE

Tickets must be purchased through the approved Rafflebox electronic raffle platform using accepted payment methods. A maximum of 1,000 total tickets will be sold. Ticket sales are final. No refunds, cancellations, substitutions, or exchanges will be issued except as required by applicable law, directed by the Indiana Gaming Commission, required by Rafflebox, or approved in writing by Chasing a Cure Parkinson's Foundation. If the raffle is cancelled before a drawing is completed and cannot be legally rescheduled or completed, refunds, if any, will be handled as required by applicable law, Rafflebox, and the Indiana Gaming Commission. Processing fees, platform fees, and optional platform contributions may be nonrefundable to the extent permitted by law and platform rules. Purchasers are responsible for providing accurate name, phone number, email address, and required purchaser information. Chasing a Cure Parkinson's Foundation is not responsible for inaccurate, incomplete, outdated, or undeliverable purchaser information.

TICKET CONFIRMATION

Ticket numbers will be issued by Rafflebox. Purchasers are responsible for reviewing confirmations and reporting any apparent error before the drawing.

ODDS

Odds of winning depend on the number of eligible tickets sold. A maximum of 1,000 tickets will be sold.

DRAWING

The drawing is scheduled for July 18, 2026, during the 3rd Annual Concert for a Cure, with an anticipated drawing window between 5:30 PM and 6:00 PM Eastern Time. The drawing date, time, location, and method are subject to applicable law, Indiana Gaming Commission requirements, Rafflebox requirements, weather, safety, technical issues, event changes, or circumstances beyond the foundation's reasonable control. The winner will be selected by random draw through the approved electronic raffle system or certified electronic random number generator. The winning ticket must be valid, paid, eligible, and issued through the approved platform. Rafflebox records, foundation records, and official draw results will control.

WINNER NOTIFICATION

Winner need not be present to win. The winning ticket may be announced during the event. The person associated with the winning ticket is a potential winner only until Chasing a Cure Parkinson's Foundation verifies eligibility and confirms completion of all required identification, tax forms, taxpayer information, withholding, prize acceptance documents, title documents, registration requirements, and transfer paperwork. The potential winner will be contacted using the phone number and email address provided at purchase. Announcement of a name or ticket number does not mean the prize has been finally awarded.

PRIZE

Prize is one 2026 Starcraft Marine 57 Ski Champ in teal, with a Mercury 25 hp four-stroke outboard motor, matching TrailMaster trailer, grey mooring cover, Bluetooth speakers, pop-up cleats, and premium finishing details. Approximate retail value: $25,000.00, based on information provided by Indy Boat Co. Actual fair market value at transfer may differ. Prize is awarded as is, where is, subject to availability, manufacturer specifications, dealer documentation, title requirements, tax requirements, registration requirements, and applicable law. No cash equivalent, cash redemption, credit, refund, substitution, or alternate prize will be awarded. Prize is not transferable before completion of all eligibility, tax, withholding, title, registration, and transfer requirements. Chasing a Cure Parkinson's Foundation makes no warranties, representations, or guarantees regarding the boat, motor, trailer, accessories, condition, merchantability, fitness for a particular purpose, performance, safety, title processing, registration, insurability, immediate use, or future value. Any manufacturer, dealer, or supplier warranties, if available, are the sole warranties available to the winner.

CLAIM DEADLINE

Potential winner must respond within 7 calendar days after the foundation's first notification attempt and complete all required eligibility verification, identification, tax forms, taxpayer information, withholding payments, prize acceptance documents, title documents, registration requirements, and transfer paperwork within 30 calendar days after notification, unless a different timeline is required by law, Rafflebox, the Indiana Gaming Commission, Indiana BMV, Indiana Department of Revenue, dealer requirements, or written foundation approval. Failure to respond, provide required identification or taxpayer information, complete required documents, satisfy taxes or withholding, satisfy eligibility requirements, or cooperate with title, registration, and transfer requirements may result in forfeiture.

TAXES, WITHHOLDING, FEES, AND COSTS

Winner is solely responsible for all federal, Indiana, local, and other taxes, fees, reporting obligations, and withholding related to the prize. Winner is responsible for title, registration, sales tax, use tax, excise tax, insurance, transportation, delivery, storage, dockage, fuel, maintenance, inspection, licensing, equipment, safety gear, and all other costs related to ownership, possession, transfer, registration, operation, storage, or use of the prize. Prize will not be released until all required tax forms, taxpayer identification information, withholding payments, prize acceptance documents, title documents, registration requirements, and transfer paperwork are complete. If withholding is required, the potential winner must provide the required withholding amount in certified funds or another form approved by Chasing a Cure Parkinson's Foundation before the prize is released. If the winner does not provide required taxpayer information or satisfy withholding requirements, the prize may be forfeited. Chasing a Cure Parkinson's Foundation may issue IRS Form W-2G, IRS Form 1099, Indiana tax forms, or other required tax reporting forms. Winner should consult the winner's own tax advisor.

TITLE, REGISTRATION, AND TRANSFER

The boat, motor, and trailer will be transferred in accordance with applicable requirements of the Indiana BMV, the Indiana Department of Revenue, the dealer, the manufacturer, the lender, and the title, registration, tax, and raffle requirements. Timing and method of transfer depend on completion of all required documents and payment of all required taxes, fees, and withholding by the winner. Chasing a Cure Parkinson's Foundation does not guarantee that the winner will receive title on the drawing date or be able to immediately operate, transport, insure, register, store, or use the prize. The winner is responsible for arranging pickup or transportation after all transfer requirements are complete. Risk of loss transfers only after the prize is legally released and transferred according to applicable documentation. The winner is responsible for determining whether the winner is legally able to title, register, insure, transport, store, operate, or use the prize. Any requested post-acceptance transfer, assignment, or title arrangement is subject to applicable law, dealer requirements, title requirements, tax reporting requirements, and written approval by Chasing a Cure Parkinson's Foundation and any required transfer parties.

DECLINED PRIZE, FORFEITURE, AND ALTERNATES

If a potential winner declines the prize, is ineligible, cannot be contacted, fails to respond, fails to complete required documents, fails to provide taxpayer information, fails to satisfy taxes or withholding, fails to complete title or transfer requirements, or is unable or unwilling to accept the prize, that potential winner forfeits any right to the prize. If forfeited, Chasing a Cure Parkinson's Foundation may select an alternate potential winner through Rafflebox or another method permitted by applicable law, Rafflebox, and the Indiana Gaming Commission. The same requirements apply to each alternate. The foundation may continue selecting alternates until the prize is awarded or until no eligible potential winner completes all requirements. If no eligible potential winner accepts and completes all requirements, the prize will not be awarded unless otherwise required by applicable law, Rafflebox, or the Indiana Gaming Commission. Final handling of any unclaimed prize and raffle proceeds will be completed only as permitted by applicable law, Rafflebox, and the Indiana Gaming Commission. Chasing a Cure Parkinson's Foundation, its officers, directors, board members, volunteers, event hosts, sponsors, donors, representatives, Wendy Chase, and Robert Spalding will not be personally responsible for taking title to, registering, insuring, storing, transporting, maintaining, operating, or paying taxes or fees related to the boat, motor, trailer, or prize components due to any potential winner's failure, refusal, ineligibility, or inability to accept the prize.

PRIZE DESCRIPTIONS

Photos, descriptions, promotional materials, and public communications are for general information only and may not reflect every specification, feature, accessory, color tone, finish, or final delivery condition. Chasing a Cure Parkinson's Foundation is not responsible for manufacturer changes, dealer changes, supply issues, documentation timing, title timing, registration timing, delivery timing, or differences between promotional descriptions and final manufacturer or dealer documentation.

PRIZE FUNDING, FULFILLMENT, AND TRANSFER STRUCTURE

The prize may be provided, held, transferred, or fulfilled through Indy Boat Co., a prize sponsor, dealer, donor, seller, prize fulfillment agreement, conditional prize purchase agreement, dealer transfer process, or another written arrangement approved by Chasing a Cure Parkinson's Foundation and its professional advisors. No public statement, promotional language, About section, social media post, flyer, email, or website content modifies these Official Rules. No statement that the prize is made possible by, provided by, sponsored by, or associated with Indy Boat Co. creates any right to cash, substitution, immediate possession, immediate title, immediate registration, immediate use, or release of the prize before all requirements are complete. Any personal gift, corporate sponsorship, in-kind donation, conditional prize purchase, prize fulfillment agreement, dealer transfer process, or other funding or prize structure related to the prize is a separate internal matter and does not modify these Official Rules or create additional rights for ticket purchasers or the potential winner.

NO FOUNDATION OR PERSONAL OWNERSHIP OBLIGATION

Nothing in these Official Rules requires Chasing a Cure Parkinson's Foundation, Wendy Chase, Robert Spalding, any foundation officer, any foundation director, any board member, any volunteer, any event host, any sponsor, any donor, or any representative to personally own, title, register, insure, store, transport, maintain, operate, or pay taxes or fees related to the boat, motor, trailer, or related prize components. The foundation's obligation is limited to administering the raffle and facilitating prize transfer as permitted by applicable law, Rafflebox, the Indiana Gaming Commission, the Indiana Department of Revenue, Indiana BMV, IRS requirements, dealer requirements, and approved written agreements.

RELEASE AND INDEMNITY

By purchasing a ticket, each purchaser releases, discharges, indemnifies, and holds harmless Chasing a Cure Parkinson's Foundation, its officers, directors, board members, volunteers, event hosts, agents, representatives, sponsors, donors, vendors, Rafflebox, Indy Boat Co., The Michael J. Fox Foundation, Team Fox, and related parties from claims, losses, damages, liabilities, injuries, costs, expenses, or causes of action arising from or related to participation, ticket purchase, platform issues, winner selection or notification, prize acceptance, transfer, possession, ownership, registration, transportation, storage, operation, use, taxes, withholding, title, insurance, costs, errors, delays, cancellation, modification, regulatory action, safety issues, technical issues, or circumstances beyond the foundation's reasonable control. This release does not waive liability that cannot be waived under applicable law.

LIMITATION OF RESPONSIBILITY

Chasing a Cure Parkinson's Foundation is not responsible for lost, late, incomplete, invalid, misdirected, undeliverable, or inaccurate ticket purchases, confirmations, emails, calls, messages, or platform records, or for technical failures, internet outages, payment issues, platform errors, email filtering, phone issues, incorrect contact information, weather, force majeure events, safety concerns, regulatory action, dealer documentation timing, title processing timing, registration timing, or circumstances beyond its reasonable control.

RIGHT TO CANCEL, SUSPEND, DELAY, OR MODIFY

Chasing a Cure Parkinson's Foundation may cancel, suspend, delay, or modify the raffle if fraud, technical failure, platform error, regulatory issue, weather, safety concern, force majeure event, title issue, tax issue, transfer issue, or any other factor impairs the integrity, legality, fairness, or administration of the raffle. Any cancellation, suspension, delay, modification, or prize handling will be conducted only as permitted by law, Rafflebox, and the Indiana Gaming Commission.

PUBLICITY AND PRIVACY

Where permitted by law, acceptance of the prize gives Chasing a Cure Parkinson's Foundation and its partners permission to use the winner's name, city, state, likeness, photograph, voice, and prize information for promotional, reporting, and charitable purposes without additional compensation. Purchaser information may be used and shared as needed for raffle administration, winner notification, tax reporting, legal compliance, recordkeeping, title or transfer processing, regulator requests, and foundation communications.

PROFESSIONAL ADVICE

Nothing in these Official Rules or related promotional materials constitutes tax, legal, financial, insurance, title, registration, boating safety, or other professional advice.

GOVERNING LAW AND FINAL AUTHORITY

The raffle and these Official Rules are governed by Indiana law and applicable federal law. Any dispute will be handled in the appropriate Indiana venue unless otherwise required by law. To the extent permitted by law, participants waive any right to bring claims as a class or representative action. Chasing a Cure Parkinson's Foundation may interpret these Official Rules, verify eligibility, resolve disputes, and make final decisions regarding raffle administration, subject to applicable law, Rafflebox requirements, Indiana Gaming Commission requirements, and any authority with jurisdiction.`;

const FIFTY_FIFTY_RULES = `SPONSOR

The 50/50 raffle is sponsored by Chasing a Cure Parkinson's Foundation, an Indiana nonprofit organization and federally recognized 501(c)(3) public charity, EIN 82-5107944. Net proceeds support its charitable mission of funding the science behind breakthroughs for Parkinson's disease through Team Fox and The Michael J. Fox Foundation. Chasing a Cure Parkinson's Foundation is 100 percent volunteer run and pays no salaries. Net proceeds help fund Parkinson's research after allowable raffle and event expenses.

LICENSE AND COMPLIANCE

Indiana Single Activity License Number: 018323. Indiana Gaming Commission Reference Number: 164990. Raffle Sales Open Date: May 8, 2026. Drawing Date: July 18, 2026. Licensed Activity Window: July 18, 2026, 2:00 PM to 7:00 PM Eastern Time. This raffle is subject to all applicable Indiana charity gaming laws, license conditions, electronic raffle requirements, Rafflebox requirements, Indiana Department of Revenue rules, IRS rules, banking rules, payment processing rules, and any other tax, reporting, withholding, or prize payment requirements. If these Official Rules conflict with applicable law, regulator direction, license conditions, or platform requirements, those requirements control.

RULES CONTROL

These Official Rules control the raffle. Promotional language, social media posts, flyers, emails, text messages, sponsor acknowledgments, verbal statements, informal communications, and Rafflebox summaries are for convenience only and do not modify these Official Rules. No oral statement, text message, email, flyer, social media post, sponsor acknowledgment, promotional statement, or informal communication may modify these Official Rules unless the modification is made in writing by Chasing a Cure Parkinson's Foundation and permitted by applicable law, Rafflebox, and the Indiana Gaming Commission.

HOUSE RULES POSTING AND AVAILABILITY

Final Official Rules for the raffle will be published before public promotion begins, made available upon request, and available at the event. Chasing a Cure Parkinson's Foundation will follow the final posted rules once established.

ELIGIBILITY

Purchasers must be at least 18 years of age and must reside in Indiana or be physically located in Indiana at the time of ticket purchase. Void where prohibited or restricted by law. Chasing a Cure Parkinson's Foundation may verify eligibility before awarding the prize. A ticket purchase by an ineligible person is void and does not create a right to receive the prize. To protect the integrity of the 50/50 raffle, the following persons are not eligible to purchase tickets or win: persons directly or materially involved in 50/50 raffle administration, ticket sales, drawing, winner verification, financial reconciliation, compliance, prize payment, or oversight; Rafflebox personnel involved in administration, operation, drawing, verification, or support of the raffle; and immediate family members or household members of any person listed above. Foundation board members, officers, event hosts, volunteers, sponsors, donors, and spouses of materially connected persons may purchase tickets and win only if they are not directly or materially involved in 50/50 raffle administration, ticket sales, drawing, winner verification, financial reconciliation, compliance, prize payment, or oversight, and do not have access to nonpublic raffle information or control over raffle results. Immediate family includes spouse, domestic partner, parent, child, sibling, grandparent, grandchild, in-law, or any person living in the same household, whether or not related. Chasing a Cure Parkinson's Foundation may disqualify any person if participation would create an actual conflict of interest, perceived conflict of interest, violation of law, violation of license requirements, violation of platform requirements, or risk to the integrity of the raffle.

TICKET PURCHASE

Tickets must be purchased through the approved Rafflebox electronic raffle platform using accepted payment methods. Ticket sales are final. No refunds, cancellations, substitutions, or exchanges will be issued except as required by applicable law, directed by the Indiana Gaming Commission, required by Rafflebox, or approved in writing by Chasing a Cure Parkinson's Foundation. If the raffle is cancelled before a drawing is completed and cannot be legally rescheduled or completed, refunds, if any, will be handled as required by applicable law, Rafflebox, and the Indiana Gaming Commission. Processing fees, platform fees, and optional platform contributions may be nonrefundable to the extent permitted by law and platform rules. Purchasers are responsible for providing accurate name, phone number, email address, and required purchaser information. Chasing a Cure Parkinson's Foundation is not responsible for inaccurate, incomplete, outdated, or undeliverable purchaser information.

TICKET CONFIRMATION

Ticket numbers will be issued by Rafflebox. Purchasers are responsible for reviewing confirmations and reporting any apparent error before the drawing.

ODDS

Odds of winning depend on the number of eligible tickets sold.

DRAWING

The drawing is scheduled for July 18, 2026, during the 3rd Annual Concert for a Cure, with an anticipated drawing window between 5:30 PM and 6:00 PM Eastern Time. The drawing date, time, location, and method are subject to applicable law, Indiana Gaming Commission requirements, Rafflebox requirements, weather, safety, technical issues, event changes, or circumstances beyond the foundation's reasonable control. The winner will be selected by random draw through the approved electronic raffle system or certified electronic random number generator. The winning ticket must be valid, paid, eligible, and issued through the approved platform. Rafflebox records, foundation records, and official draw results will control.

WINNER NOTIFICATION

Winner need not be present to win. The winning ticket may be announced during the event. The person associated with the winning ticket is a potential winner only until Chasing a Cure Parkinson's Foundation verifies eligibility and confirms completion of all required identification, tax forms, taxpayer information, withholding, prize acceptance documents, and payment paperwork. The potential winner will be contacted using the phone number and email address provided at purchase. Announcement of a name or ticket number does not mean the prize has been finally awarded.

PRIZE

Prize is 50 percent of eligible 50/50 raffle ticket sales, less any required federal, Indiana, local, or other tax withholding or legally required deductions. Eligible 50/50 raffle ticket sales exclude donations, optional platform contributions, processing fees, chargebacks, refunds, voided purchases, invalid purchases, and any amounts not legally available for prize calculation. The final prize amount depends on eligible ticket sales and required deductions. No substitute prize will be awarded. Prize is not transferable before completion of all eligibility, identity, tax, withholding, prize acceptance, and payment requirements.

CLAIM DEADLINE

Potential winner must respond within 7 calendar days after the foundation's first notification attempt and complete all required eligibility verification, identification, tax forms, taxpayer information, withholding requirements, prize acceptance documents, and payment paperwork within 30 calendar days after notification, unless a different timeline is required by law, Rafflebox, the Indiana Gaming Commission, Indiana Department of Revenue, IRS, banking requirements, payment processor requirements, or written foundation approval. Failure to respond, provide required identification or taxpayer information, complete required documents, satisfy taxes or withholding, satisfy eligibility requirements, or cooperate with payment requirements may result in forfeiture.

TAXES, WITHHOLDING, FEES, AND REPORTING

Winner is solely responsible for all federal, Indiana, local, and other taxes, fees, reporting obligations, and withholding related to the prize. Chasing a Cure Parkinson's Foundation may withhold required federal, Indiana, local, or other taxes from the prize before payment. The prize will not be paid until all required tax forms, taxpayer identification information, withholding requirements, prize acceptance documents, and payment paperwork are complete. If the winner does not provide required taxpayer information or satisfy withholding requirements, the prize may be forfeited. Chasing a Cure Parkinson's Foundation may issue IRS Form W-2G, IRS Form 1099, Indiana tax forms, or other required tax reporting forms. Winner should consult the winner's own tax advisor.

PAYMENT OF PRIZE

The prize will be paid by check, electronic check, or another payment method approved by Chasing a Cure Parkinson's Foundation from the separate segregated charity gaming account after all eligibility, identity, tax, withholding, prize acceptance, and payment requirements are complete. Chasing a Cure Parkinson's Foundation does not guarantee that the prize will be paid on the drawing date. Payment timing and method depend on final raffle reconciliation, platform settlement, banking requirements, payment processor requirements, tax withholding requirements, legal requirements, and completion of required documents. Any ceremonial check, photo check, or public prize presentation is for promotional and photo purposes only, is not negotiable, and is not the actual prize payment.

DECLINED PRIZE, FORFEITURE, AND ALTERNATES

If a potential winner declines the prize, is ineligible, cannot be contacted, fails to respond, fails to complete required documents, fails to provide taxpayer information, fails to satisfy taxes or withholding, or is unable or unwilling to accept the prize, that potential winner forfeits any right to the prize. If forfeited, Chasing a Cure Parkinson's Foundation may select an alternate potential winner through Rafflebox or another method permitted by applicable law, Rafflebox, and the Indiana Gaming Commission. The same requirements apply to each alternate. The foundation may continue selecting alternates until the prize is awarded or until no eligible potential winner completes all requirements. If no eligible potential winner accepts and completes all requirements, the prize will not be awarded unless otherwise required by applicable law, Rafflebox, or the Indiana Gaming Commission. Final handling of any unclaimed prize and raffle proceeds will be completed only as permitted by applicable law, Rafflebox, and the Indiana Gaming Commission.

NO PERSONAL PAYMENT OBLIGATION

Nothing in these Official Rules requires Wendy Chase, Robert Spalding, any foundation officer, any foundation director, any board member, any volunteer, any event host, any sponsor, any donor, or any representative to personally pay, advance, guarantee, finance, or reimburse any prize amount, tax amount, withholding amount, fee, expense, or raffle-related cost. The foundation's obligation is limited to administering the raffle and paying the prize as permitted by applicable law, Rafflebox, the Indiana Gaming Commission, Indiana Department of Revenue, IRS requirements, payment processor requirements, banking requirements, and approved written agreements.

RELEASE AND INDEMNITY

By purchasing a ticket, each purchaser releases, discharges, indemnifies, and holds harmless Chasing a Cure Parkinson's Foundation, its officers, directors, board members, volunteers, event hosts, agents, representatives, sponsors, donors, vendors, Rafflebox, The Michael J. Fox Foundation, Team Fox, and related parties from claims, losses, damages, liabilities, injuries, costs, expenses, or causes of action arising from or related to participation, ticket purchase, platform issues, winner selection or notification, prize acceptance, payment, taxes, withholding, reporting, banking issues, payment timing, costs, errors, delays, cancellation, modification, regulatory action, safety issues, technical issues, or circumstances beyond the foundation's reasonable control. This release does not waive liability that cannot be waived under applicable law.

LIMITATION OF RESPONSIBILITY

Chasing a Cure Parkinson's Foundation is not responsible for lost, late, incomplete, invalid, misdirected, undeliverable, or inaccurate ticket purchases, confirmations, emails, calls, messages, or platform records, or for technical failures, internet outages, payment issues, platform errors, email filtering, phone issues, incorrect contact information, weather, force majeure events, safety concerns, regulatory action, banking delays, payment processor delays, or circumstances beyond its reasonable control.

RIGHT TO CANCEL, SUSPEND, DELAY, OR MODIFY

Chasing a Cure Parkinson's Foundation may cancel, suspend, delay, or modify the raffle if fraud, technical failure, platform error, regulatory issue, weather, safety concern, force majeure event, banking issue, payment issue, tax issue, withholding issue, or any other factor impairs the integrity, legality, fairness, or administration of the raffle. Any cancellation, suspension, delay, modification, or prize handling will be conducted only as permitted by law, Rafflebox, and the Indiana Gaming Commission.

PUBLICITY AND PRIVACY

Where permitted by law, acceptance of the prize gives Chasing a Cure Parkinson's Foundation and its partners permission to use the winner's name, city, state, likeness, photograph, voice, and prize information for promotional, reporting, and charitable purposes without additional compensation. Purchaser information may be used and shared as needed for raffle administration, winner notification, tax reporting, legal compliance, recordkeeping, regulator requests, payment processing, and foundation communications.

PROFESSIONAL ADVICE

Nothing in these Official Rules or related promotional materials constitutes tax, legal, financial, insurance, or other professional advice.

GOVERNING LAW AND FINAL AUTHORITY

The raffle and these Official Rules are governed by Indiana law and applicable federal law. Any dispute will be handled in the appropriate Indiana venue unless otherwise required by law. To the extent permitted by law, participants waive any right to bring claims as a class or representative action. Chasing a Cure Parkinson's Foundation may interpret these Official Rules, verify eligibility, resolve disputes, and make final decisions regarding raffle administration, subject to applicable law, Rafflebox requirements, Indiana Gaming Commission requirements, and any authority with jurisdiction.`;

export default function RaffleTermsModal({ label = "Boat Raffle", theme = "dark" }: { label?: string; theme?: "dark" | "light" }) {
  const [open, setOpen] = useState(false);
  const rules = label === "50/50 Raffle" ? FIFTY_FIFTY_RULES : BOAT_RAFFLE_RULES;
  const buttonColor = theme === "light" ? "rgba(0,0,0,0.45)" : "rgba(255,255,255,0.5)";

  return (
    <>
      <button
        onClick={() => { setOpen(true); trackEvent("official_rules_opened", { raffle: label }); }}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: 13,
          color: buttonColor,
          padding: 0,
          textDecoration: "underline",
          textUnderlineOffset: 3,
          fontFamily: "inherit",
        }}
      >
        {label} Official Rules
      </button>

      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.75)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#1a1a1a",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 16,
              padding: "40px",
              maxWidth: 720,
              width: "100%",
              maxHeight: "80vh",
              overflowY: "auto",
              position: "relative",
              textAlign: "left",
            }}
          >
            <button
              onClick={() => setOpen(false)}
              style={{
                position: "absolute",
                top: 16,
                right: 20,
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: 24,
                color: "rgba(255,255,255,0.5)",
                lineHeight: 1,
                fontFamily: "inherit",
              }}
              aria-label="Close"
            >
              ×
            </button>

            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#E8C0C0", marginBottom: 8 }}>
              Official Rules
            </div>
            <h2 style={{ color: "#fff", fontSize: 22, fontWeight: 700, margin: "0 0 28px" }}>
              {label} Official Rules
            </h2>

            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.8, whiteSpace: "pre-wrap" }}>
              {rules}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
