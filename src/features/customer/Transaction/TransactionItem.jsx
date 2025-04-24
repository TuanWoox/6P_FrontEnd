import { useState } from 'react';
import { ArrowDownLeftIcon, ArrowUpRightIcon, XMarkIcon } from '@heroicons/react/24/outline';

export default function TransactionItem({
  type,
  timestamp,
  transactionID,
  amount,
  description,
  sourceAccountID,
  destinationAccountID,
  status
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Parse date and time from timestamp
  const dateObj = new Date(timestamp);
  const date = dateObj.toLocaleDateString();
  const time = dateObj.toLocaleTimeString();

  // Determine outgoing vs incoming based on type
  const outgoingTypes = ['WITHDRAWAL', 'TRANSFER'];
  const isOutgoing = outgoingTypes.includes(type);

  const iconColor = isOutgoing ? '#EE1D1D' : '#00BA00';
  const iconBg = isOutgoing ? 'bg-red-100' : 'bg-green-100';
  const amountColor = isOutgoing ? 'text-red-600' : 'text-green-600';
  const IconComponent = isOutgoing ? ArrowDownLeftIcon : ArrowUpRightIcon;

  return (
    <>
      {/* Summary item */}
      <div className="w-full bg-white rounded-2xl shadow-sm">
        <div
          className="px-4 py-6 cursor-pointer hover:bg-gray-100 rounded-2xl transition-colors"
          onClick={openModal}
        >
          <div className="flex justify-between items-start">
            <div className="flex items-start">
              <div className={`${iconBg} p-2 rounded-full mr-3`}>
                <IconComponent className="h-5 w-5" style={{ color: iconColor }} />
              </div>
              <div>
                <div className="flex items-center">
                  <span className="text-gray-500 text-sm">{date}</span>
                  <span className="mx-2 text-gray-400">•</span>
                  <span className="text-gray-500 text-sm">{time}</span>
                </div>
                <h3 className="font-medium text-gray-800 mt-1">{description}</h3>
              </div>
            </div>
            <div className={`${amountColor} font-semibold`}>{amount.toLocaleString()} VND</div>
          </div>
        </div>
      </div>

      {/* Detail modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-lg flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-900">Chi tiết giao dịch</h3>
              <button onClick={closeModal} className="text-gray-400 hover:text-gray-500">
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-gray-500">Ngày & Giờ</span>
                <span className="text-gray-800">{`${date} ${time}`}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-gray-500">Mã giao dịch</span>
                <span className="text-gray-800">{transactionID}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-gray-500">Số tiền</span>
                <span className={`${amountColor} font-medium`}>{amount.toLocaleString()} VND</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-gray-500">Tài khoản nguồn</span>
                <span className="text-gray-800">{sourceAccountID}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-gray-500">Tài khoản đích</span>
                <span className="text-gray-800">{destinationAccountID}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-gray-500">Hình thức</span>
                <span className={`${amountColor} font-medium`}>{type}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-gray-500">Trạng thái</span>
                <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      status === 'Completed'
                        ? 'text-green-600 bg-green-50'
                        : 'text-red-600 bg-red-50'
                    }`}
                  >
                  {status}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
