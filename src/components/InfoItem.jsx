function InfoItem({ icon: Icon, label, value }) {
    return (
        <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
                <Icon className="text-gray-400" size={18} />
                <span className="text-gray-500">{label}</span>
            </div>
            <span className="font-medium">{value}</span>
        </div>
    );
}

export default InfoItem;