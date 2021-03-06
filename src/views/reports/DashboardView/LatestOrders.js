import React, { useState } from 'react';
import clsx from 'clsx';
import moment from 'moment';
import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import {
	Box,
	Button,
	Card,
	CardHeader,
	Chip,
	Divider,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	TableSortLabel,
	Tooltip,
	makeStyles
} from '@material-ui/core';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ProgressBar from './ProgressBar';

const data = [
	{
		id: uuid(),
		ref: 'CDD1049',
		amount: 30.5,
		customer: {
			name: 'Ekaterina Tankova'
		},
		createdAt: 1555016400000,
		status: 'delivered',
		report: 'Report A',
		time: 930,
		timeTaken: '2 min',
		cost: '$4',
	},
	{
		id: uuid(),
		ref: 'CDD1048',
		amount: 25.1,
		customer: {
			name: 'Cao Yu'
		},
		createdAt: 1555016400000,
		status: 'delivered',
		report: 'Report B',
		time: 834,
		timeTaken: '1 min',
		cost: '$1.5',
	},
	{
		id: uuid(),
		ref: 'CDD1047',
		amount: 10.99,
		customer: {
			name: 'Alexa Richardson'
		},
		createdAt: 1554930000000,
		status: 'delivered',
		report: 'Report C',
		time: 438,
		timeTaken: '5 min',
		cost: '$2',
	},
	{
		id: uuid(),
		ref: 'CDD1046',
		amount: 96.43,
		customer: {
			name: 'Anje Keizer'
		},
		createdAt: 1554757200000,
		status: 'delivered',
		report: 'Report D',
		time: 1234,
		timeTaken: '2 min',
		cost: '$4',
	},
	{
		id: uuid(),
		ref: 'CDD1045',
		amount: 32.54,
		customer: {
			name: 'Clarke Gillebert'
		},
		createdAt: 1554670800000,
		status: 'delivered',
		report: 'Report E',
		time: 2319,
		timeTaken: '3 min',
		cost: '$3.5',
	},
	{
		id: uuid(),
		ref: 'CDD1044',
		amount: 16.76,
		customer: {
			name: 'Adam Denisov'
		},
		createdAt: 1554670800000,
		status: 'delivered',
		report: 'Report F',
		time: 930,
		timeTaken: '7 min',
		cost: '$2',
	}
];

const useStyles = makeStyles(() => ({
	root: {},
	actions: {
		justifyContent: 'flex-end'
	}
}));

const LatestOrders = ({ className, ...rest }) => {
	const classes = useStyles();
	const [orders] = useState(data);

	return (
		<Card
			className={clsx(classes.root, className)}
			{...rest}
		>
			<CardHeader title="Previous Reports" style={{ color: 'var(--color-KfinBlue)', textAlign: 'center', textTransform: 'uppercase' }} />
			<Divider />
			<PerfectScrollbar>
				<Box minWidth={800}>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell>
									Report ID
                </TableCell>
								<TableCell>
									Report Name
                </TableCell>
								<TableCell sortDirection="desc">
									<Tooltip
										enterDelay={300}
										title="Sort"
									>
										<TableSortLabel
											active
											direction="desc"
										>
											Date
                    </TableSortLabel>
									</Tooltip>
								</TableCell>
								<TableCell>
									Time taken
                </TableCell>
								<TableCell>
									Cost
                </TableCell>
								<TableCell>
									Status
                </TableCell>
								<TableCell>
									Download
                </TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{orders.map((order) => (
								<TableRow
									hover
									key={order.id}
								>
									<TableCell>
										{order.ref}
									</TableCell>
									<TableCell>
										{order.report}
									</TableCell>
									<TableCell>
										{moment(order.createdAt).format('DD/MM/YYYY')}
									</TableCell>
									<TableCell>
										{order.timeTaken}
									</TableCell>
									<TableCell>
										<strong>{order.cost}</strong>
									</TableCell>
									<TableCell>
										<Chip
											color="primary"
											label={order.status}
											size="small"
										/>
									</TableCell>
									<TableCell>
										<CloudDownloadIcon color="disabled" cursor="pointer" />
										{/* <ProgressBar /> */}
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</Box>
			</PerfectScrollbar>
			<Box
				display="flex"
				justifyContent="flex-end"
				p={2}
			>
				<Button
					color="primary"
					endIcon={<ArrowRightIcon />}
					size="small"
					variant="text"
				>
					View all
        </Button>
			</Box>
		</Card>
	);
};

LatestOrders.propTypes = {
	className: PropTypes.string
};

export default LatestOrders;
