/*
 * Copyright (C) Contributors to the Suwayomi project
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import Button, { ButtonProps } from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { ForwardedRef, forwardRef } from 'react';

export const CustomButton = forwardRef(
    <C extends React.ElementType>(
        { children, ...props }: ButtonProps<C, { component?: C }>,
        ref: ForwardedRef<HTMLButtonElement | null>,
    ) => (
        <Button ref={ref} {...props}>
            <Stack
                direction="row"
                sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 1,
                    flexWrap: 'wrap',
                }}
            >
                {children}
            </Stack>
        </Button>
    ),
);
