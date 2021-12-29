import Qb from './logos/Qb';
import Sage from './logos/Sage';
import Slack from './logos/Slack';
import Zapier from './logos/Zapier';

const details = [
  {
    id: 1,
    logo: Slack,
    name: 'Slack',
    content:
      'Add Brass to your company’s slack to receive real-time  notifications, send team mate invitations, and generate account statements.',
  },
  {
    id: 2,
    logo: Qb,
    name: 'QuickBooks',
    content:
      'Manage your business finance by sync your invoices and payments with quickbooks.',
  },
  {
    id: 3,
    logo: Sage,
    name: 'Sage',
    content:
      'Manage your business cashflow, invoices and activities by sync your account with sage.',
  },
  {
    id: 4,
    logo: Zapier,
    name: 'Zapier',
    content:
      'Connect your Brass account to the thousands of apps on the zapier platform.',
  },
];

export default function IntegrationSection() {
  return (
    <div className="text-black w-screen px-4 lg:px-24 md:pt-24">
      <div className="flex flex-col space-y-3">
        <h2 className="text-3xl lg:text-5xl font-bold tracking-tight">
          Integrations that matter
        </h2>
        <p className="lg:text-xl">
          Brass is seamlessly integrated with the tools your team is already
          familiar with.
        </p>
      </div>
      <div className="pt-16 flex items-center space-x-4 lg:space-x-5  overflow-x-auto md:scrollbar-hide">
        {details.map((detail) => (
          <div key={detail.id} className="bg-transparent">
            <div className="h-80 w-72 lg:w-[300px] px-8 lg:px-6 py-12 text-black border rounded-lg space-y-8">
              {detail.logo()}
              <div className="flex flex-col space-y-4">
                <h1 className="font-semibold text-lg">{detail.name}</h1>
                <p className="text-left text-[15px] font-[400] text-gray-900">
                  {detail.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
