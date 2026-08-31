'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, Plus, Trash2, Calculator, DollarSign } from 'lucide-react';

interface LineItem {
  id: string;
  description: string;
  quantity: number;
  rate: number;
  amount: number;
}

interface AddInvoiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (data: any) => void;
}

export default function AddInvoiceModal({ isOpen, onClose, onSubmit }: AddInvoiceModalProps) {
  const [formData, setFormData] = useState({
    invoiceNumber: `INV-${Date.now().toString().slice(-6)}`,
    client: '',
    project: '',
    invoiceDate: new Date().toISOString().split('T')[0],
    dueDate: '',
    paymentTerms: 'net-30',
    notes: '',
    taxRate: 0,
    discountRate: 0,
    discountType: 'percentage'
  });

  const [lineItems, setLineItems] = useState<LineItem[]>([
    { id: '1', description: '', quantity: 1, rate: 0, amount: 0 }
  ]);

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: string, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleLineItemChange = (id: string, field: string, value: string | number) => {
    setLineItems(prev => prev.map(item => {
      if (item.id === id) {
        const updated = { ...item, [field]: value };
        // Auto-calculate amount when quantity or rate changes
        if (field === 'quantity' || field === 'rate') {
          updated.amount = Number(updated.quantity) * Number(updated.rate);
        }
        return updated;
      }
      return item;
    }));
  };

  const addLineItem = () => {
    const newItem: LineItem = {
      id: Date.now().toString(),
      description: '',
      quantity: 1,
      rate: 0,
      amount: 0
    };
    setLineItems(prev => [...prev, newItem]);
  };

  const removeLineItem = (id: string) => {
    if (lineItems.length > 1) {
      setLineItems(prev => prev.filter(item => item.id !== id));
    }
  };

  const calculateSubtotal = () => {
    return lineItems.reduce((sum, item) => sum + item.amount, 0);
  };

  const calculateDiscount = () => {
    const subtotal = calculateSubtotal();
    if (formData.discountType === 'percentage') {
      return (subtotal * formData.discountRate) / 100;
    }
    return formData.discountRate;
  };

  const calculateTax = () => {
    const subtotal = calculateSubtotal();
    const discount = calculateDiscount();
    return ((subtotal - discount) * formData.taxRate) / 100;
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const discount = calculateDiscount();
    const tax = calculateTax();
    return subtotal - discount + tax;
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.client) newErrors.client = 'Client is required';
    if (!formData.dueDate) newErrors.dueDate = 'Due date is required';
    if (lineItems.some(item => !item.description.trim())) {
      newErrors.lineItems = 'All line items must have descriptions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    const invoiceData = {
      ...formData,
      lineItems,
      subtotal: calculateSubtotal(),
      discount: calculateDiscount(),
      tax: calculateTax(),
      total: calculateTotal()
    };

    console.log('Creating invoice:', invoiceData);
    onSubmit?.(invoiceData);
    
    // Reset form
    setFormData({
      invoiceNumber: `INV-${Date.now().toString().slice(-6)}`,
      client: '',
      project: '',
      invoiceDate: new Date().toISOString().split('T')[0],
      dueDate: '',
      paymentTerms: 'net-30',
      notes: '',
      taxRate: 0,
      discountRate: 0,
      discountType: 'percentage'
    });
    setLineItems([{ id: '1', description: '', quantity: 1, rate: 0, amount: 0 }]);
    
    onClose();
  };

  const handleClose = () => {
    setFormData({
      invoiceNumber: `INV-${Date.now().toString().slice(-6)}`,
      client: '',
      project: '',
      invoiceDate: new Date().toISOString().split('T')[0],
      dueDate: '',
      paymentTerms: 'net-30',
      notes: '',
      taxRate: 0,
      discountRate: 0,
      discountType: 'percentage'
    });
    setLineItems([{ id: '1', description: '', quantity: 1, rate: 0, amount: 0 }]);
    setErrors({});
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-white rounded-xl shadow-2xl w-full max-w-4xl h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-yellow-50 to-blue-50 flex-shrink-0">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-yellow-500 rounded-lg">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Create Invoice</h2>
                  <p className="text-sm text-gray-600">Generate a new invoice for your client</p>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="text-gray-500 hover:text-gray-700 p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Scrollable Form Content */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-6">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Invoice Details */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <span className="w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                      Invoice Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Invoice Number
                        </label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-50"
                          value={formData.invoiceNumber}
                          readOnly
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Invoice Date *
                        </label>
                        <input
                          type="date"
                          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-colors"
                          value={formData.invoiceDate}
                          onChange={(e) => handleInputChange('invoiceDate', e.target.value)}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Due Date *
                        </label>
                        <input
                          type="date"
                          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-colors ${
                            errors.dueDate ? 'border-red-300 focus:ring-red-500' : 'border-gray-200'
                          }`}
                          value={formData.dueDate}
                          onChange={(e) => handleInputChange('dueDate', e.target.value)}
                        />
                        {errors.dueDate && <p className="text-red-500 text-xs mt-1">{errors.dueDate}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Client *
                        </label>
                        <select
                          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-colors ${
                            errors.client ? 'border-red-300 focus:ring-red-500' : 'border-gray-200'
                          }`}
                          value={formData.client}
                          onChange={(e) => handleInputChange('client', e.target.value)}
                        >
                          <option value="">Select a client</option>
                          <option value="techcorp">TechCorp Solutions</option>
                          <option value="startupxyz">StartupXYZ</option>
                          <option value="designco">DesignCo Agency</option>
                          <option value="megacorp">MegaCorp Industries</option>
                          <option value="cloudtech">CloudTech Services</option>
                        </select>
                        {errors.client && <p className="text-red-500 text-xs mt-1">{errors.client}</p>}
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Project (Optional)
                        </label>
                        <select
                          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-colors"
                          value={formData.project}
                          onChange={(e) => handleInputChange('project', e.target.value)}
                        >
                          <option value="">Select a project</option>
                          <option value="ecommerce">E-commerce Platform</option>
                          <option value="mobile-qa">Mobile App QA</option>
                          <option value="website">Website Redesign</option>
                          <option value="enterprise">Enterprise System Testing</option>
                          <option value="api">API Testing & Documentation</option>
                        </select>
                      </div>
                    </div>

                    <div className="mt-6">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Payment Terms
                      </label>
                      <select
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-colors"
                        value={formData.paymentTerms}
                        onChange={(e) => handleInputChange('paymentTerms', e.target.value)}
                      >
                        <option value="due-on-receipt">Due on Receipt</option>
                        <option value="net-15">Net 15</option>
                        <option value="net-30">Net 30</option>
                        <option value="net-60">Net 60</option>
                        <option value="net-90">Net 90</option>
                      </select>
                    </div>
                  </div>

                  {/* Line Items */}
                  <div className="border-t border-gray-200 pt-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                        <span className="w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                        Line Items
                      </h3>
                      <button
                        type="button"
                        onClick={addLineItem}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-lg text-sm flex items-center space-x-1 transition-colors"
                      >
                        <Plus className="h-4 w-4" />
                        <span>Add Item</span>
                      </button>
                    </div>

                    {errors.lineItems && <p className="text-red-500 text-sm mb-4">{errors.lineItems}</p>}

                    <div className="space-y-4">
                      {lineItems.map((item) => (
                        <div key={item.id} className="grid grid-cols-12 gap-4 items-end p-4 border border-gray-200 rounded-lg">
                          <div className="col-span-5">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Description *
                            </label>
                            <input
                              type="text"
                              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-colors"
                              placeholder="Description of service/product"
                              value={item.description}
                              onChange={(e) => handleLineItemChange(item.id, 'description', e.target.value)}
                            />
                          </div>
                          
                          <div className="col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Quantity
                            </label>
                            <input
                              type="number"
                              min="0"
                              step="0.01"
                              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-colors"
                              value={item.quantity}
                              onChange={(e) => handleLineItemChange(item.id, 'quantity', parseFloat(e.target.value) || 0)}
                            />
                          </div>

                          <div className="col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Rate ($)
                            </label>
                            <input
                              type="number"
                              min="0"
                              step="0.01"
                              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-colors"
                              value={item.rate}
                              onChange={(e) => handleLineItemChange(item.id, 'rate', parseFloat(e.target.value) || 0)}
                            />
                          </div>

                          <div className="col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Amount ($)
                            </label>
                            <input
                              type="text"
                              className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50"
                              value={item.amount.toFixed(2)}
                              readOnly
                            />
                          </div>

                          <div className="col-span-1 flex items-end pb-2">
                            <button
                              type="button"
                              onClick={() => removeLineItem(item.id)}
                              disabled={lineItems.length === 1}
                              className={`p-2 rounded-lg transition-colors ${
                                lineItems.length === 1
                                  ? 'text-gray-300 cursor-not-allowed'
                                  : 'text-red-500 hover:bg-red-50 hover:text-red-600'
                              }`}
                            >
                              <Trash2 className="h-5 w-5" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Discounts and Taxes */}
                  <div className="border-t border-gray-200 pt-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <span className="w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
                      Discounts & Taxes
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Discount
                        </label>
                        <div className="flex space-x-2">
                          <input
                            type="number"
                            min="0"
                            step="0.01"
                            className="flex-1 px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-colors"
                            value={formData.discountRate}
                            onChange={(e) => handleInputChange('discountRate', parseFloat(e.target.value) || 0)}
                          />
                          <select
                            className="w-20 px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-colors"
                            value={formData.discountType}
                            onChange={(e) => handleInputChange('discountType', e.target.value)}
                          >
                            <option value="percentage">%</option>
                            <option value="fixed">$</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Tax Rate (%)
                        </label>
                        <input
                          type="number"
                          min="0"
                          step="0.01"
                          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-colors"
                          value={formData.taxRate}
                          onChange={(e) => handleInputChange('taxRate', parseFloat(e.target.value) || 0)}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Totals Summary */}
                  <div className="border-t border-gray-200 pt-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <span className="w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
                      Summary
                    </h3>
                    <dl className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <dt>Subtotal</dt>
                        <dd>${calculateSubtotal().toFixed(2)}</dd>
                      </div>
                      <div className="flex justify-between text-red-600">
                        <dt>Discount</dt>
                        <dd>-${calculateDiscount().toFixed(2)}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt>Tax</dt>
                        <dd>${calculateTax().toFixed(2)}</dd>
                      </div>
                      <div className="flex justify-between font-bold text-lg pt-2 border-t">
                        <dt>Total</dt>
                        <dd>${calculateTotal().toFixed(2)}</dd>
                      </div>
                    </dl>
                  </div>

                  {/* Notes */}
                  <div className="border-t border-gray-200 pt-8">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Notes
                    </label>
                    <textarea
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-colors h-24"
                      placeholder="Additional notes or terms..."
                      value={formData.notes}
                      onChange={(e) => handleInputChange('notes', e.target.value)}
                    />
                  </div>
                </form>
              </div>
            </div>
    
            {/* Footer */}
            <div className="flex items-center justify-end space-x-3 p-6 border-t border-gray-200 bg-gray-50 flex-shrink-0">
              <button
                type="button"
                onClick={handleClose}
                className="px-6 py-2 text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                onClick={handleSubmit}
                className="px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors font-medium flex items-center space-x-2"
              >
                <DollarSign className="h-4 w-4" />
                <span>Create Invoice</span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}