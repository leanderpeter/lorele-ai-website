import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
//import { ExclamationTriangleIcon } from '@heroicons/react/outline';

export default function CreateDatastoreModal({ isOpen, closeModal }) {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        open={isOpen}
        onClose={closeModal}
        initialFocus={cancelButtonRef}
        className="fixed z-10 inset-0 overflow-y-auto"
      >
        <div className="flex items-center justify-center min-h-screen">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="w-full mx-auto max-w-md p-6 bg-white rounded-lg shadow-lg">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  {/* <ExclamationTriangleIcon
                    className="h-6 w-6 text-red-600"
                    aria-hidden="true"
                  /> */}
                </div>
                <div className="ml-4">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium text-gray-900"
                  >
                    Deactivate account
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Are you sure you want to deactivate your account? All of
                      your data will be permanently removed. This action cannot
                      be undone.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md hover:bg-red-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  onClick={closeModal}
                >
                  Deactivate
                </button>
                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-gray-100 border border-transparent rounded-md hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  onClick={closeModal}
                  ref={cancelButtonRef}
                >
                  Cancel
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
